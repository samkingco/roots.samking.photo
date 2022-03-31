import "@reach/dialog/styles.css";
import { App } from "components/App";
import "components/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { createClient, Provider as GraphqlProvider } from "urql";

const client = createClient({
  url: "https://api.studio.thegraph.com/query/23748/roots/v0.0.4",
});

export default function CustomApp(props: AppProps) {
  return (
    <GraphqlProvider value={client}>
      <App {...props} />
    </GraphqlProvider>
  );
}
