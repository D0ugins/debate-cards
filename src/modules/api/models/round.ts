import 'reflect-metadata';
import { Field, ID, ObjectType, registerEnumType } from 'type-graphql';
import { Round as RoundModel, Side } from '@prisma/client';
import { File } from './file';

registerEnumType(Side, { name: 'Side' });

@ObjectType()
export class Round implements Partial<RoundModel> {
  @Field((type) => ID)
  id: number;

  @Field()
  wiki: string;

  @Field()
  school: string;

  @Field()
  team: string;

  @Field((type) => Side)
  side: Side;

  @Field()
  entryDate: Date;

  @Field()
  tournament: string;

  @Field()
  roundNum: string;

  @Field()
  opponent: string;

  @Field()
  judge: string;

  @Field({ nullable: true })
  roundReport: string | null;

  @Field({ nullable: true })
  cites: string | null;

  @Field((type) => File, { nullable: true })
  openSource: File | null;
}
