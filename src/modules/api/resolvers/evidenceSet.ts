import { db } from 'app/lib';
import { selectFields } from 'app/lib/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { Info, Query, Resolver } from 'type-graphql';
import { EvidenceSet } from '../models';

@Resolver()
export class EvidenceSetResolver {
  @Query((returns) => [EvidenceSet])
  async evidenceSets(@Info() info: GraphQLResolveInfo) {
    return db.evidenceSet.findMany({ select: selectFields(info) });
  }
}
