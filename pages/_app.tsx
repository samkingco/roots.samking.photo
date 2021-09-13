import type { AppProps } from "next/app";
import Head from "next/head";
import "@reach/dialog/styles.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Roots</title>
        <meta name="description" content="A thing about a thing" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <div className="content">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
