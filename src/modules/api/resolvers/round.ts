import 'reflect-metadata';
import { Resolver } from 'type-graphql';
import { createGetResolver } from '.';
import { Round } from '../models';

const RoundGetResolver = createGetResolver('round', Round);

@Resolver()
export class RoundResolver extends RoundGetResolver {}
