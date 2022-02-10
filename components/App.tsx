import type { AppProps } from "next/app";
import Head from "next/head";
import styles from "components/App.module.css";

export function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          defer
          data-domain="roots.samking.photo"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <div className={styles.content}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
