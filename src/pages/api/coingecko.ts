import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const isTokamakEcosystemTokenName = (tokenName: string): boolean => {
  if (!tokenName) {
    throw new Error("Token name is required");
  }

  const supportedTokens = ["dooropen", "aura", "lyda", "tonstarter"];
  return supportedTokens.includes(tokenName);
};

const fetchPrice = async (tokenName: string, isEcosystemToken: boolean) => {
  const API_URL = `https://pro-api.coingecko.com/api/v3/coins/markets?ids=${tokenName}&vs_currency=usd&x_cg_pro_api_key=${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}`;

  if (isEcosystemToken) {
    switch (tokenName) {
      case "tonstarter":
        const response = await fetch(
          "https://price.api.tokamak.network/tosprice"
        );
        return response;
      case "dooropen": {
        const response = await fetch(
          "https://price.api.tokamak.network/docprice"
        );
        return response;
      }
      case "aura": {
        const response = await fetch(
          "https://price.api.tokamak.network/auraprice"
        );
        return response;
      }
      case "lyda": {
        const response = await fetch(
          "https://price.api.tokamak.network/lydaprice"
        );
        return response;
      }
    }
  }
  console.log(API_URL)
  const response = await fetch(API_URL);
  return response;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tokenName } = req.query;

  if (!tokenName || typeof tokenName !== "string") {
    return res.status(400).json({ message: "Token name is required" });
  }

try {
    const isEcosystemToken = isTokamakEcosystemTokenName(tokenName);
    const response = await fetch(`https://pro-api.coingecko.com/api/v3/coins/markets?ids=${tokenName}&vs_currency=usd&x_cg_pro_api_key=${process.env.COINGECKO_API_KEY}`);
    const data = await response.json();

    return res.status(200).json(
      isEcosystemToken ? [{ current_price: data }] : data
    );
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
