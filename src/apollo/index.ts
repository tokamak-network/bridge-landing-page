import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { MultiAPILink } from "@habx/apollo-multi-endpoint-link";
import { createHttpLink } from "apollo-link-http";

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    new MultiAPILink({
      endpoints: {
        price: process.env.NEXT_PUBLIC_PRICE_API as string,
      },
      //@ts-ignore
      createHttpLink: () => createHttpLink(),
    }),
  ]),
  cache: new InMemoryCache(),
});
