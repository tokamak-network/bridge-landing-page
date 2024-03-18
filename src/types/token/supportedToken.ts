import {
  MAINNET_CONTRACTS,
  GOERLI_CONTRACTS,
  TOKAMAK_CONTRACTS,
  TOKAMAK_GOERLI_CONTRACTS,
} from "@/constant/contracts/index";

export enum SupportedChainId {
  MAINNET = 1,
  GOERLI = 5,
  //   ARBITRUM_ONE = 42161,
  //   ARBITRUM_GOERLI = 421613,
  //   OPTIMISM = 10,
  //   OPTIMISM_GOERLI = 420,
  //   POLYGON = 137,
  //   POLYGON_MUMBAI = 80001,
  //   CELO = 42220,
  //   CELO_ALFAJORES = 44787,
  //   BNB = 56,
  TITAN = 55004,
  DARIUS = 5050,
}

type SupportedMainTokenNames =
  | "Tokamak Network Token"
  | "Wrapped TON"
  | "TONStarter"
  | "ETH";
type SupportedEcosystemTokenNames = "Dooropen" | "AURA" | "LYDA";
type SupportedStableTokenNames = "USD//C";

export type SupportedTokenNames =
  | SupportedMainTokenNames
  | SupportedEcosystemTokenNames
  | SupportedStableTokenNames;

type SupportedMainTokens = "TON" | "TOS" | "WTON" | "ETH";
type SupportedEcosystemTokens = "DOC" | "AURA" | "LYDA";
type SupportedStableTokens = "USDC";

export type SupportedTokenSymbol =
  | SupportedMainTokens
  | SupportedEcosystemTokens
  | SupportedStableTokens;

export type TokenInfo = {
  tokenName: SupportedTokenNames | String | string;
  tokenSymbol: SupportedTokenSymbol | String | string;
  address: {
    [K in keyof typeof SupportedChainId]: `0x${string}` | string | null;
  };
  decimals: number;
  isNativeCurrency: SupportedChainId[] | null;
  availableForBirdge?: boolean;
};

export type SupportedTokens_T = TokenInfo[];

export const supportedTokens: SupportedTokens_T = [
  {
    tokenName: "ETH",
    tokenSymbol: "ETH",
    address: {
      MAINNET: "",
      GOERLI: "",
      TITAN: TOKAMAK_CONTRACTS.OVM_ETH,
      DARIUS: TOKAMAK_GOERLI_CONTRACTS.OVM_ETH,
    },
    decimals: 18,
    isNativeCurrency: [
      SupportedChainId.MAINNET,
      SupportedChainId.GOERLI,
      SupportedChainId.TITAN,
      SupportedChainId.DARIUS,
    ],
    availableForBirdge: true,
  },
  {
    tokenName: "WETH",
    tokenSymbol: "WETH",
    address: {
      MAINNET: MAINNET_CONTRACTS.WETH_ADDRESS,
      GOERLI: GOERLI_CONTRACTS.WETH_ADDRESS,
      TITAN: TOKAMAK_CONTRACTS.WETH_ADDRESS,
      DARIUS: TOKAMAK_GOERLI_CONTRACTS.WETH_ADDRESS,
      // TITAN: TOKAMAK_CONTRACTS.WETH_ADDRESS,
      // DARIUS: TOKAMAK_GOERLI_CONTRACTS.WETH_ADDRESS,
    },
    decimals: 18,
    isNativeCurrency: null,
  },
  {
    tokenName: "Tokamak Network",
    tokenSymbol: "TON",
    address: {
      MAINNET: MAINNET_CONTRACTS.TON_ADDRESS,
      GOERLI: GOERLI_CONTRACTS.TON_ADDRESS,
      TITAN: TOKAMAK_CONTRACTS.TON_ADDRESS,
      DARIUS: TOKAMAK_GOERLI_CONTRACTS.TON_ADDRESS,
    },
    decimals: 18,
    isNativeCurrency: null,
    availableForBirdge: true,
    // isNativeCurrency: [
    //   SupportedChainId.TITAN,
    //   SupportedChainId.DARIUS,
    // ],
  },
  {
    tokenName: "Wrapped TON",
    tokenSymbol: "WTON",
    address: {
      MAINNET: MAINNET_CONTRACTS.WTON_ADDRESS,
      GOERLI: GOERLI_CONTRACTS.WTON_ADDRESS,
      TITAN: null,
      DARIUS: null,
    },
    decimals: 27,
    isNativeCurrency: null,
  },

  {
    tokenName: "TONStarter",
    tokenSymbol: "TOS",
    address: {
      MAINNET: MAINNET_CONTRACTS.TOS_ADDRESS,
      GOERLI: GOERLI_CONTRACTS.TOS_ADDRESS,
      TITAN: TOKAMAK_CONTRACTS.TOS_ADDRESS,
      DARIUS: TOKAMAK_GOERLI_CONTRACTS.TOS_ADDRESS,
    },
    decimals: 18,
    isNativeCurrency: null,
    availableForBirdge: true,
  },
  {
    tokenName: "Dooropen",
    tokenSymbol: "DOC",
    address: {
      MAINNET: MAINNET_CONTRACTS.DOC_ADDRESS,
      GOERLI: GOERLI_CONTRACTS.DOC_ADDRESS,
      TITAN: null,
      DARIUS: null,
    },
    decimals: 18,
    isNativeCurrency: null,
  },
  {
    tokenName: "Dragons of Midgard",
    tokenSymbol: "AURA",
    address: {
      MAINNET: MAINNET_CONTRACTS.AURA_ADDRESS,
      GOERLI: GOERLI_CONTRACTS.AURA_ADDRESS,
      TITAN: null,
      DARIUS: null,
    },
    decimals: 18,
    isNativeCurrency: null,
  },
  {
    tokenName: "LYDA",
    tokenSymbol: "LYDA",
    address: {
      MAINNET: MAINNET_CONTRACTS.LYDA_ADDRESS,
      GOERLI: GOERLI_CONTRACTS.LYDA_ADDRESS,
      TITAN: null,
      DARIUS: null,
    },
    decimals: 18,
    isNativeCurrency: null,
  },
  {
    tokenName: "USD Coin",
    tokenSymbol: "USDC",
    address: {
      MAINNET: MAINNET_CONTRACTS.USDC_ADDRESS,
      GOERLI: GOERLI_CONTRACTS.USDC_ADDRESS,
      TITAN: TOKAMAK_CONTRACTS.USDC_ADDRESS,
      DARIUS: TOKAMAK_GOERLI_CONTRACTS.USDC_ADDRESS,
    },
    decimals: 6,
    isNativeCurrency: null,
    availableForBirdge: true,
  },
  {
    tokenName: "Tether USD",
    tokenSymbol: "USDT",
    address: {
      MAINNET: MAINNET_CONTRACTS.USDT_ADDRESS,
      GOERLI: GOERLI_CONTRACTS.USDT_ADDRESS,
      TITAN: TOKAMAK_CONTRACTS.USDT_ADDRES,
      DARIUS: TOKAMAK_GOERLI_CONTRACTS.USDT_ADDRES,
    },
    decimals: 6,
    isNativeCurrency: null,
    availableForBirdge: true,
  },
];
