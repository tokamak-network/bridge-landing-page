import { useQuery } from "@tanstack/react-query";
import { BigNumber, ethers } from "ethers";
import BalanceChecker from "@/abis/BalanceChecker.json";
import { useCallback, useEffect, useState } from "react";
import { supportedTokens } from "@/types/token/supportedToken";
import { fetchMarketPrice } from "@/utils/price/fetchMarketPrice";
import { BalanceCheckerContract, BridgeContract } from "@/constant";

const getList = async (queryParam: string | undefined | null) => {
  if (queryParam === undefined || queryParam === null) {
    return null;
  }
  const res = await fetch(queryParam, {
    method: "GET",
  });

  if (res.status !== 200) {
    throw new Error("token list error");
  }

  if (res.ok) {
    return res.json();
  }

  return undefined;
};

export function useFetchBalance() {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_ETHEREUM_RPC
  );
  const [marketList, setMarketList] = useState<any[] | undefined>([]);
  const [totalBalance, setTotalBalance] = useState<any>();
  const balanceCheck = new ethers.Contract(
    BalanceCheckerContract,
    BalanceChecker,
    provider
  );

  const { isLoading, error, data, isError, isLoadingError } = useQuery({
    queryKey: [process.env.NEXT_PUBLIC_TOKEN_LIST],
    queryFn: () => getList(`${process.env.NEXT_PUBLIC_TOKEN_LIST}?chainId=1`),
  });

  const {
    isLoading: isLoadingID,
    data: dataID,
  } = useQuery({
    queryKey: [process.env.NEXT_PUBLIC_TOKEN_ID_LIST],
    queryFn: () => getList(`${process.env.NEXT_PUBLIC_TOKEN_ID_LIST}`),
  });

  const getBalances = useCallback(async () => {
    if (data && dataID) {
      // take only the necessary data from the api
      const tokens = data.tokens.map((token: any) => {
        return {
          address: token.address,
          decimals: token.decimals,
          name: token.name,
          symbol: token.tokenSymbol,
        };
      });

      //take only the necessary data from the supported tokens
      const tokamakTokens = supportedTokens.map((token: any) => {
        return {
          address:
            token.address.MAINNET !== ""
              ? token.address.MAINNET.toLowerCase()
              : "0x0000000000000000000000000000000000000000",
          decimals: token.decimals,
          name:
            token.tokenName === "Tether USD"
              ? "tether"
              : token.tokenName === "USD Coin"
              ? "usdc"
              : token.tokenName === "ETH"
              ? "ethereum"
              : token.tokenName,
          symbol: token.tokenSymbol,
        };
      });

      //make a list with coingecko tokens and tokamak tokens
      const tokensList = tokamakTokens.concat(tokens);

      //filter out the duplicate tokens from the token list above
      const uniqueTokensList = tokensList.filter(
        (obj: any, index: any) =>
          tokensList.findIndex((item: any) => item.address === obj.address) ===
          index
      );

      //create an array with only token addresses to pass to the contract function
      const tokenAddresses = uniqueTokensList.map((token: any) => {
        return token.address;
      });

      if (tokenAddresses) {
        //call the balance contract to get the balances of all 4000 something tokens
        const balances = await balanceCheck.balances(
          [BridgeContract],
          tokenAddresses
        );

        //format the balance to readable number using the decimals from the uniqueTokensList. match each balance to corresponding decimal using the index
        const formattedBalances = balances.map(
          (balance: BigNumber, index: number) => {
            return {
              balance: Number(
                ethers.utils.formatUnits(
                  balance,
                  uniqueTokensList[index].decimals
                )
              ),
              address: uniqueTokensList[index].address,
              name: uniqueTokensList[index].name,
              symbol: uniqueTokensList[index].symbol,
            };
          }
        );

        //filter out only the tokens that have any balance > 0
        const tokensWithBalances = formattedBalances.filter(
          (token: any) => token.balance > 0
        );

        //get the matching id from coingecko v3 token list using the token name and manually add some tokens
        const tokensWithId = tokensWithBalances.map((token: any) => {
         
          const tokenId = dataID.filter(
            (data: any) => data.name.toLowerCase() === token.name.toLowerCase()
          );
          return {
            ...token,
            id:
              tokenId.length > 0
                ? tokenId[0].id
                : token.symbol === "DOC"
                ? "dooropen"
                : token.symbol === "WTON"
                ? "tokamak-network"
                : token.symbol.toLowerCase(),
          };
        });

        //call the fetchMarketPrice function for all the tokens in the tokensWithId array
        const marketPricedList = await Promise.all(
          tokensWithId.map(async (token: any) => {
            const marketprice = await fetchMarketPrice(token.id);
            const balanceInUSD = token.balance * marketprice;

            return {
              ...token,
              balanceInUSD: balanceInUSD,
            };
          })
        );
        return marketPricedList;
      }
    }
    return undefined;
  }, [isLoading, isLoadingID]);

  useEffect(() => {
    const fetchBalances = async () => {
      const balances = await getBalances();
      let sum=0;
      balances?.map((item) => {
        sum += Number(item.balanceInUSD);
      })
      return setTotalBalance(sum);
      // return setMarketList(balances);
    };

    fetchBalances().catch((e) => {
    });
  }, [data, dataID]);

  return totalBalance;
}
