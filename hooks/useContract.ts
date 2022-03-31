import { useWallet } from "@gimmixorg/use-wallet";
import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";
import {
  contractAbi,
  contractAddress,
  deployedContracts,
  isChainSupportedForContract,
} from "utils/contracts";

export function useContract(contractName: keyof typeof deployedContracts) {
  const { provider, network } = useWallet();
  const [contract, setContract] = useState<Contract>();

  useEffect(() => {
    if (
      provider &&
      network &&
      isChainSupportedForContract(contractName, network.chainId)
    ) {
      const signer = provider.getSigner();
      const c = new ethers.Contract(
        contractAddress(contractName, network.chainId),
        contractAbi(contractName),
        signer
      );
      setContract(c);
    } else {
      const c = new ethers.Contract(
        contractAddress(contractName, 1), // mainnet by default
        contractAbi(contractName),
        ethers.getDefaultProvider(1, {
          infura: process.env.NEXT_PUBLIC_INFURA_ID,
        })
      );
      setContract(c);
    }
  }, [provider, network]);

  return { contract };
}
