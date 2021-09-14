import type { AppProps } from "next/app";
import Head from "next/head";
import styles from "@components/App.module.css";

export function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Roots by Sam King</title>
        {/* TODO: Add description etc */}
        <meta name="description" content="A thing about a thing" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
