import 'reflect-metadata';
import { Evidence } from '../models';
import { EvidenceSearchArgs, SearchableEvidenceField } from '../inputs';
import { createGetResolver } from '.';
import { Args, Info, Query, Resolver } from 'type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { elastic } from 'app/lib/elastic';
import { flatMap } from 'lodash';
import { db } from 'app/lib';
import { selectFields } from 'app/lib/graphql';

const EvidenceGetResolver = createGetResolver('evidence', Evidence);

@Resolver()
export class EvidenceResolver extends EvidenceGetResolver {
  // A lot of things are hard coded at the moment, in the future could be made customizable
  @Query((returns) => [Evidence])
  async search(
    @Args() { query, size, fields, evidenceSets, duplicateWeight }: EvidenceSearchArgs,
    @Info() info: GraphQLResolveInfo,
  ): Promise<Partial<Evidence>[]> {
    // Does a search in elastic that only returns ids, then queries those ids from postgres
    // Not sure if this is the best approach but otherwise it would be more difficult to do relational queries
    console.time('search');
    const results = await elastic.search({
      index: 'evidence',
      size,
      query: {
        bool: {
          must: {
            function_score: {
              query: {
                query_string: {
                  query,
                  type: 'most_fields', // sums scores from each field
                  fields: fields.map(({ field, weight }) => `${SearchableEvidenceField[field]}^${weight}`),
                },
              },
              functions: [
                {
                  script_score: {
                    script: {
                      params: { duplicateWeight },
                      source: "_score * Math.pow(doc['EvidenceBucket.count'].value, params.duplicateWeight)",
                    },
                  },
                },
              ],
              boost_mode: 'replace',
            },
          },
          filter: evidenceSets ? { terms: { 'File.evidenceSetId': evidenceSets } } : undefined,
        },
      },
      collapse: {
        field: 'bucketId',
      },
      _source: false,
      docvalue_fields: ['id'],
    });
    console.timeEnd('search');
    const ids: number[] = flatMap(results.hits.hits, 'fields.id');
    const evidence = await db.evidence.findMany({ where: { id: { in: ids } }, select: selectFields(info) });
    // Resort results based on ranking
    return evidence.sort((a: { id: number }, b: { id: number }) => ids.indexOf(a.id) - ids.indexOf(b.id));
  }
}
