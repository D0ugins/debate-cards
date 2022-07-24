import 'reflect-metadata';
import { Field, ID, Int, ObjectType } from 'type-graphql';
import { EvidenceBucket as EvidenceBucketSchema } from '@prisma/client';
import { Evidence } from './evidence';

@ObjectType()
export class EvidenceBucket implements Partial<EvidenceBucketSchema> {
  @Field((type) => ID)
  id: number;

  @Field((type) => Int)
  count: number;

  @Field((type) => [Evidence])
  evidence: Evidence[];
}
