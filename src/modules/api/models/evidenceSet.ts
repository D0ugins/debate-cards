import 'reflect-metadata';
import { Field, ID, ObjectType } from 'type-graphql';
import { EvidenceSet as EvidenceSetSchema } from '@prisma/client';

@ObjectType()
export class EvidenceSet implements Partial<EvidenceSetSchema> {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  label: string;
}
