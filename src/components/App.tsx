import type { AppProps } from "next/app";
import Head from "next/head";
import styles from "@components/App.module.css";

export function App({ Component, pageProps }: AppProps) {
  const title = "Roots by Sam King";
  const description =
    "A collection of 40 photographs exploring my roots in the Scottish Highlands. Available to purchase on OpenSea.";
  const url = "https://roots.samking.photo";
  const socialImage = `${url}/social.jpg`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@samkingco" />
      </Head>
      <div className={styles.content}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
