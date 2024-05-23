import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql", // GraphQL endpoint URL
  cache: new InMemoryCache(),
});
