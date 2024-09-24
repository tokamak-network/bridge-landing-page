// import { apolloClient } from "@/apollo";
// import { GET_MARKET_PRICE } from "@/graphql/getMarketPrice";
// import {
//   changeTokenNameForAPI,
//   trimTokenName,
// } from "@/hooks/price/useGetMarketPrice";

const isTokamakEcosystemTokenName = (tokenName: string): boolean => {
  if (!tokenName) {
    throw new Error("Token name is required");
  }

  const supportedTokens = ["dooropen", "aura", "lyda", "tonstarter"];
  return supportedTokens.includes(tokenName);
};

export const fetchTokenPrice = async (tokenSymbol: string) => {
  if (tokenSymbol === "USDT") {
    return 1;
  }

  const BTC_URL = `https://api.upbit.com/v1/ticker?markets=USDT-BTC`;
  const res = await fetch(BTC_URL);
  const BTC_data = await res.json();
  const btc_price = BTC_data[0].trade_price;

  const API_URL = tokenSymbol === "TON" ? `https://api.upbit.com/v1/ticker?markets=BTC-${tokenSymbol}` : `https://api.upbit.com/v1/ticker?markets=USDT-${tokenSymbol}`;
  const response = await fetch(API_URL);
  const data = await response.json();
  const token_price = data[0].trade_price;
  return tokenSymbol === "TON" ? btc_price * token_price : token_price;

}

// const fetchPrice = async (tokenName: string, isEcosystemToken: boolean) => {
//   const API_URL = `https://pro-api.coingecko.com/api/v3/coins/markets?ids=${tokenName}&vs_currency=usd&x_cg_pro_api_key=${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}`;
//   if (isEcosystemToken) {
//     switch (tokenName) {
//       case "tonstarter":
//         const response = await fetch(
//           "https://price.api.tokamak.network/tosprice"
//         );
//         return response;
//       case "dooropen": {
//         const response = await fetch(
//           "https://price.api.tokamak.network/docprice"
//         );
//         return response;
//       }
//       case "aura": {
//         const response = await fetch(
//           "https://price.api.tokamak.network/auraprice"
//         );
//         return response;
//       }
//       case "lyda": {
//         const response = await fetch(
//           "https://price.api.tokamak.network/lydaprice"
//         );
//         return response;
//       }
//     }
//   }
//   const response = await fetch(API_URL);
//   return response;
// };

// export async function fetchMarketPrice(tokenId: string) {

//   try {
//     const tokenName = changeTokenNameForAPI(tokenId);
//     const result = await apolloClient.query({
//       query: GET_MARKET_PRICE,
//       variables: { tokenName: trimTokenName(tokenName) },
//       context: {
//         apiName: "price",
//       },
//     });
//     if (result.data.getTokenMarketData.current_price)
//     return result.data.getTokenMarketData.current_price;
//     return undefined;
//   } catch (e) {
//     return undefined;
//   }
// }

// export async function fetchMarketPrice(tokenName: string) {
//   const isEcosystemToken = isTokamakEcosystemTokenName(tokenName);
//   const response = await fetchPrice(tokenName, isEcosystemToken);
//   const data = await response.json();
//   return isEcosystemToken ? data : data[0].current_price;
// }
