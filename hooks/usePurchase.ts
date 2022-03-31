import { useWallet } from "@gimmixorg/use-wallet";
import { BigNumber } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { connectOptions } from "../utils/connectOptions";
import { isChainSupportedForContract } from "../utils/contracts";
import { useContract } from "./useContract";

interface Options {
  tokenId: number;
}

export enum State {
  NOT_READY = "NOT_READY",
  NOT_CONNECTED = "NOT_CONNECTED",
  WRONG_NETWORK = "WRONG_NETWORK",
  READY = "READY",
  WAITING = "WAITING",
  ERROR = "ERROR",
  BROADCASTED = "BROADCASTED",
  CONFIRMED = "CONFIRMED",
}

export function usePurchase({ tokenId }: Options) {
  const { account, provider, connect, network } = useWallet();
  const { contract } = useContract("roots");

  const [purchaseState, setMintState] = useState<State>(State.NOT_READY);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  // Set state of minting
  useEffect(() => {
    // No account connected
    if (!account) {
      setMintState(State.NOT_CONNECTED);
      return;
    }

    // Wrong network connected
    if (network && !isChainSupportedForContract("roots", network.chainId)) {
      setMintState(State.WRONG_NETWORK);
      return;
    }

    // When a contract is available to query the balance
    if (contract) {
      setMintState(State.READY);
    }
  }, [account, network, contract]);

  // When the mint button is pressed
  const handlePurchase = useCallback(
    async (purchasePrice: BigNumber) => {
      setErrorMessage("");

      if (!account) {
        setMintState(State.NOT_CONNECTED);
        connect(connectOptions);
        return;
      }
      if (!contract || !provider) {
        setMintState(State.NOT_READY);
        return;
      }
      if (purchaseState === State.ERROR) {
        setMintState(State.READY);
      }
      if (![State.READY, State.ERROR].includes(purchaseState as any)) {
        return;
      }

      try {
        setMintState(State.WAITING);
        const signer = provider.getSigner();
        const tx = await contract
          .connect(signer)
          .mint(tokenId, { value: purchasePrice });
        setMintState(State.BROADCASTED);
        await tx.wait();
        setMintState(State.CONFIRMED);
      } catch (e: any) {
        if (e) {
          if (e.message.includes("code=INSUFFICIENT_FUNDS")) {
            setErrorMessage("Insufficient funds");
          } else if (e.message.includes("User denied")) {
            setErrorMessage("Rejected in wallet");
          } else {
            setErrorMessage("Something went wrong");
          }
        }
        console.error(e);
        setMintState(State.ERROR);
      }
    },
    [contract, account, provider, connect, purchaseState]
  );

  return {
    handlePurchase,
    purchaseState,
    errorMessage,
  };
}
