export async function fetchMarketPrice(tokenId: string) {
  
  try {
    const response = await fetch(`/api/coingecko?tokenName=${tokenId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch the market price");
    }
    const data = await response.json();
    return data[0].current_price;
  } catch (error) {
  }
}
