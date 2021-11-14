import { BigNumber, ethers } from "ethers";

export function getPriceText(hasMinted: boolean, price: BigNumber | null) {
  if (hasMinted) return "Sold";
  if (!price) return "";
  return `${ethers.utils.formatEther(price)} ETH`;
}
