import React from "react";
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import Web3ReactManager from "providers/Web3ReactManager";
import ModalManager from "providers/ModalManager";
import MintManager from "providers/MintManager";
import getLibrary from "utils/getLibrary";
import { App } from "components/App";
import "@reach/dialog/styles.css";
import "components/globals.css";

export default function CustomApp(props: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactManager>
        <MintManager>
          <ModalManager>
            <App {...props} />
          </ModalManager>
        </MintManager>
      </Web3ReactManager>
    </Web3ReactProvider>
  );
}
