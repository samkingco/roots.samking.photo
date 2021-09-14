import React from "react";
import type { AppProps } from "next/app";
import { App } from "@components/App";
import "@reach/dialog/styles.css";
import "@components/globals.css";

export default function CustomApp(props: AppProps) {
  return <App {...props} />;
}
