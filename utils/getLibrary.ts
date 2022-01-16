import { NETWORK_CHAIN_ID } from "./connectors";
import { Web3Provider } from "@ethersproject/providers";

const isClientSide = typeof window !== "undefined";

export default function getLibrary(provider: any): Web3Provider | undefined {
  if (!isClientSide) {
    return;
  }

  const library = new Web3Provider(provider, NETWORK_CHAIN_ID);
  library.pollingInterval = 15000;
  return library;
}
