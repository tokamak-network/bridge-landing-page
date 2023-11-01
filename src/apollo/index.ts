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
        l1BridgeGoerli: process.env.NEXT_PUBLIC_L1BRIDGE_GOERLI as string,
        l1BridgeMainnet: process.env.NEXT_PUBLIC_L1BRIDGE_MAINNET as string,
        l2BridgeTitanGoerli: process.env.NEXT_PUBLIC_L2MESSENGER_TITAN_GOERLI as string,
        l2BridgeTitan: process.env.NEXT_PUBLIC_L2MESSENGER_TITAN as string,
        titanSubGraph: process.env.NEXT_PUBLIC_SUBGRAPH_TITAN as string,
        titanGoerliSubGraph: process.env.NEXT_PUBLIC_SUBGRAPH_TITAN_GOERLI as string,

      },
      //@ts-ignore
      createHttpLink: () => createHttpLink(),
    }),
  ]),
  cache: new InMemoryCache(),
});
