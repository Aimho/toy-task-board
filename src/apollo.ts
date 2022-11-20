import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import config from "./config";

const httpLink = new HttpLink({
  uri: `${config.hasura.url}`,
  headers: {
    "x-hasura-admin-secret": config.hasura.secret,
  },
});

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
