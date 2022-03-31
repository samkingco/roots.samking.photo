import { BigNumber, ethers } from "ethers";
import { useContract } from "hooks/useContract";
import { useENS } from "hooks/useENS";
import { State, usePurchase } from "hooks/usePurchase";
import { TextButton } from "./TextButton";

interface Props {
  tokenId: number;
  owner?: string;
  isCheckingOwner?: boolean;
  purchasePrice: BigNumber;
  refreshQuery?: () => void;
  showConnectButtonText?: boolean;
}

export default function SaleInformation({
  tokenId,
  owner,
  isCheckingOwner,
  purchasePrice,
  refreshQuery,
  showConnectButtonText,
}: Props) {
  const ownerENS = useENS(owner);
  const { contract } = useContract("roots");

  const { handlePurchase, purchaseState, errorMessage } = usePurchase({
    tokenId,
  });

  const formattedPrice = ethers.utils.formatUnits(purchasePrice, "ether");

  const onPurchase = async () => {
    await handlePurchase(purchasePrice);
    if (refreshQuery) {
      refreshQuery();
    }
  };

  if (isCheckingOwner) {
    return <p className="loadingText" />;
  }

  if (owner) {
    return (
      <p>
        Owned by{" "}
        <a
          className="link"
          href={`https://opensea.io/assets/${contract?.address}/${tokenId}`}
        >
          {ownerENS ? ownerENS.displayName : <span className="loadingText" />}
        </a>
      </p>
    );
  }

  const buttonText =
    showConnectButtonText && purchaseState === State.NOT_CONNECTED
      ? "Connect wallet"
      : `Buy • ${formattedPrice} ETH`;

  if (purchaseState === State.WAITING) {
    return <p className="loadingText">Check your wallet to confirm</p>;
  }

  if (purchaseState === State.BROADCASTED) {
    return <p className="loadingText">Confirming on the network</p>;
  }

  if (purchaseState === State.CONFIRMED) {
    return <p>Thank you for your purchase!</p>;
  }

  if (purchaseState === State.NOT_CONNECTED || purchaseState === State.READY) {
    return (
      <div>
        <button onClick={onPurchase}>{buttonText}</button>
      </div>
    );
  }

  if (purchaseState === State.ERROR) {
    return (
      <p>
        {errorMessage}… <TextButton onClick={onPurchase}>try again</TextButton>
      </p>
    );
  }

  return <p className="loadingText" />;
}
