import { useCallback, useEffect, useMemo, useState } from "react";
import { useModal } from "hooks/useModal";
import { useWeb3 } from "hooks/useWeb3";
import { useMint } from "hooks/useMint";
import { getPriceText } from "utils/price";
import { ModalType } from "providers/ModalManager";
import { getFriendlyAddress } from "utils/addresses";

interface Props {
  tokenId: number;
}

enum MintingState {
  NOT_READY = "NOT_READY",
  NOT_CONNECTED = "NOT_CONNECTED",
  ALREADY_MINTED = "ALREADY_MINTED",
  READY = "READY",
  WAITING = "WAITING",
  ERROR = "ERROR",
  BROADCASTED = "BROADCASTED",
  CONFIRMED = "CONFIRMED",
}

export default function SaleInformation({ tokenId }: Props) {
  const { account } = useWeb3();
  const { openModal } = useModal();
  const {
    mintPrice,
    readonlyContract,
    writeableContract,
    mintedTokenIds,
    refreshMintedTokenIds,
  } = useMint();
  const [owner, setOwner] = useState("");
  const [mintingState, setMintingState] = useState<MintingState>(
    MintingState.NOT_READY
  );
  const alreadySold = mintingState === MintingState.ALREADY_MINTED;

  // Set state of minting
  useEffect(() => {
    // Check if it's sold, and set ALREADY_SOLD
    const alreadyMinted = mintedTokenIds && mintedTokenIds.includes(tokenId);
    if (alreadyMinted) {
      setMintingState(MintingState.ALREADY_MINTED);
      return;
    }
    // Check if there's an account connected and set NOT_CONNECTED
    if (!account && !alreadyMinted && mintedTokenIds !== null) {
      setMintingState(MintingState.NOT_CONNECTED);
      return;
    }
    // Check if there's a writeable contract for minting and set READY
    if (writeableContract) {
      setMintingState(MintingState.READY);
    }
  }, [mintedTokenIds, tokenId, account, writeableContract]);

  // Set the owner of the token
  useEffect(() => {
    async function getOwner() {
      try {
        const owner = await readonlyContract.ownerOf(tokenId);
        const formattedOwner = await getFriendlyAddress(owner);
        setOwner(formattedOwner);
      } catch (e) {
        console.error("Failed to get owner", e);
      }
    }
    if (alreadySold) {
      getOwner();
    }
  }, [mintedTokenIds, tokenId, alreadySold]);

  // When the mint button is pressed
  const handleMint = useCallback(async () => {
    if (!account) {
      setMintingState(MintingState.NOT_CONNECTED);
      openModal(ModalType.WEB3_CONNECT);
      return;
    }
    if (!writeableContract) {
      setMintingState(MintingState.NOT_READY);
      return;
    }
    if (mintingState === MintingState.ERROR) {
      setMintingState(MintingState.READY);
    }
    if (
      ![MintingState.READY, MintingState.ERROR].includes(mintingState as any)
    ) {
      return;
    }

    try {
      setMintingState(MintingState.WAITING);
      const price = await writeableContract.price();
      const tx = await writeableContract.mintForSelf(tokenId, { value: price });
      setMintingState(MintingState.BROADCASTED);
      await tx.wait();
      setMintingState(MintingState.CONFIRMED);
      setTimeout(() => {
        refreshMintedTokenIds();
        setMintingState(MintingState.ALREADY_MINTED);
      }, 4000);
    } catch (e) {
      console.error(e);
      setMintingState(MintingState.ERROR);
    }
  }, [mintingState]);

  const buttonText = useMemo(() => {
    switch (mintingState) {
      case MintingState.NOT_CONNECTED:
        return "Connect wallet to buy";
      default:
        return `Buy for ${getPriceText(alreadySold, mintPrice)}`;
    }
  }, [mintingState]);

  if (alreadySold) {
    return (
      <p>
        Owned by{" "}
        {owner ? (
          <a
            className="link"
            href={`https://testnets.opensea.io/assets/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}/${tokenId}`}
          >
            {owner}
          </a>
        ) : (
          <span className="loadingText" />
        )}
      </p>
    );
  }

  if (mintingState === MintingState.WAITING) {
    return <p className="loadingText">Check your wallet to confirm</p>;
  }

  if (mintingState === MintingState.BROADCASTED) {
    return <p className="loadingText">Confirming on the network</p>;
  }

  if (mintingState === MintingState.CONFIRMED) {
    return <p>Purchase successful!</p>;
  }

  if (mintingState === MintingState.NOT_READY) {
    return <p className="loadingText">Loading</p>;
  }

  return <button onClick={handleMint}>{buttonText}</button>;
}
