import { BigNumber, ethers } from "ethers";

export function getPriceText(price: BigNumber | null) {
  if (!price) return "…";
  return `${ethers.utils.formatEther(price)} ETH`;
}
