import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/apollo";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/client/queryClient";

import Layout from '@/components/layout'
import theme from '@/theme'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ApolloProvider>
    </QueryClientProvider>
  )
}
