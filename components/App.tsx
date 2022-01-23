import type { AppProps } from "next/app";
import Head from "next/head";
import styles from "components/App.module.css";

export function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.content}>
      <Component {...pageProps} />
    </div>
  );
}
