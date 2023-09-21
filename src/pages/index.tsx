import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Stack, Text } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tokamak Bridge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Stack zIndex={100} color={'white'} bgImage="url('/assets/background.png')" bgPos={'top'} bgRepeat={'no-repeat'} h={'100vw'}>
        </Stack>
      </Box>
    </>
  )
}
