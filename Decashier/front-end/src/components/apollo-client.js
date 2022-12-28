import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://enormous-anchovy-60.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "6WlgzNF4yZGoALyrPqhhb1HvymrmaV7JkvlKeH2gDgi3iiJa99oqH43ffYcXFTin",
  },
});

export default client;
