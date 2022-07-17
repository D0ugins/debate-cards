import 'reflect-metadata';
import { Field, ID, ObjectType } from 'type-graphql';
import { File as FileSchema } from '@prisma/client';
import { EvidenceSet } from './evidenceSet';
import { Evidence } from './evidence';
import { Round } from './round';

@ObjectType()
export class File implements Partial<FileSchema> {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field((type) => [Evidence])
  evidence: Evidence[];

  @Field((type) => [Round])
  rounds: Round[];

  @Field()
  evidenceSet: EvidenceSet;
}
