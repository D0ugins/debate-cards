import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { EvidenceBucketResolver, EvidenceResolver, FileResolver, RoundResolver } from './resolvers';

const PORT = process.env.API_PORT || 4000;
async function main() {
  const schema = await buildSchema({
    resolvers: [EvidenceResolver, FileResolver, RoundResolver, EvidenceBucketResolver],
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen({ port: PORT });
  console.log(`API running at ${url}`);
}
main();
