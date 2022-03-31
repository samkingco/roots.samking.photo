import WalletConnectProvider from "@walletconnect/web3-provider";
import { ICoreOptions } from "web3modal";

export const connectOptions: Partial<ICoreOptions> = {
  network: "mainnet",
  cacheProvider: false,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
        rpc: {
          1: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
          4: `https://rinkeby.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
        },
      },
    },
  },
};
