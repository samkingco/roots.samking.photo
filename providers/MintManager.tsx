import { BigNumber, ethers } from "ethers";
import { useWeb3 } from "hooks/useWeb3";
import { createContext, useEffect, useState } from "react";
import { Roots, Roots__factory } from "../typechain";

export interface MintManagerState {
  mintPrice: BigNumber | null;
  writeableContract: Roots | null;
  readonlyContract: Roots;
}

export const MintManagerContext = createContext<MintManagerState>(
  {} as MintManagerState
);

export default function MintManager({ children }: { children: any }) {
  const { library } = useWeb3();
  const rpc = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_NETWORK_URL || "http://localhost:8545"
  );
  const readonlyContract = new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
    Roots__factory.abi,
    rpc
  ) as Roots;

  const [mintPrice, setMintPrice] =
    useState<MintManagerState["mintPrice"]>(null);
  const [writeableContract, setWriteableContract] =
    useState<MintManagerState["writeableContract"]>(null);

  // Get the mint price
  useEffect(() => {
    async function getPrice() {
      const mintPrice = await readonlyContract.price();
      setMintPrice(mintPrice);
    }
    getPrice();
  }, []);

  // Set up a writeable contract
  useEffect(() => {
    async function setContract() {
      if (library) {
        const writeableContract = Roots__factory.connect(
          process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
          await library.getSigner()
        ) as Roots;
        setWriteableContract(writeableContract);
      }
    }
    setContract();
  }, [library]);

  return (
    <MintManagerContext.Provider
      value={{
        mintPrice,
        writeableContract,
        readonlyContract,
      }}
    >
      {children}
    </MintManagerContext.Provider>
  );
}
