import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContextualRouting } from "next-use-contextual-routing";
import Head from "next/head";
import { Photo } from "data-site/index";
import { Image } from "components/Image";
import { TextButton } from "components/TextButton";
import styles from "components/PhotoPage.module.css";
import SaleInformation from "./SaleInformation";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface Props {
  photo: Photo;
  onClose?: () => void;
  closeHref?: string;
  totalPhotos: number;
}

export function PhotoPage({ photo, onClose, closeHref, totalPhotos }: Props) {
  const router = useRouter();
  const { makeContextualHref } = useContextualRouting();

  const prevId = wrap(1, totalPhotos + 1, photo.tokenId - 1);
  const nextId = wrap(1, totalPhotos + 1, photo.tokenId + 1);

  useEffect(() => {
    const downHandler = ({ key }: KeyboardEvent) => {
      if (["ArrowLeft", "p"].includes(key)) {
        router.push(makeContextualHref({ photo: prevId }), `/photo/${prevId}`, {
          scroll: false,
        });
      }
      if (["ArrowRight", "n"].includes(key)) {
        router.push(makeContextualHref({ photo: nextId }), `/photo/${nextId}`, {
          scroll: false,
        });
      }
      if (["Escape"].includes(key) && closeHref) {
        router.push(closeHref);
      }
    };

    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [prevId, nextId, closeHref, makeContextualHref, router]);

  let closeContent = null;

  if (closeHref) {
    closeContent = (
      <Link href={closeHref}>
        <a className="link">Full collection</a>
      </Link>
    );
  }

  if (onClose) {
    closeContent = <TextButton onClick={onClose}>ESC</TextButton>;
  }

  return (
    <>
      <Head>
        <title>Photo #{photo.tokenId} | Roots</title>
      </Head>
      <article className={styles.page}>
        <p>Roots #{photo.tokenId}</p>
        <nav className={styles.rightCol}>{closeContent}</nav>
        <div className={styles.image}>
          <Image
            key={photo.tokenId}
            src={photo.src}
            alt=""
            title=""
            layout="fill"
            objectFit="contain"
            objectPosition="left top"
            withPlaceholderBG={false}
          />
        </div>
        <div className={styles.cta}>
          <SaleInformation tokenId={photo.tokenId} />
        </div>
        <nav className={styles.pagination}>
          <Link
            href={makeContextualHref({ photo: prevId })}
            as={`/photo/${prevId}`}
            scroll={false}
          >
            <a className="link">Prev</a>
          </Link>{" "}
          <span className={clsx(styles.paginationSeparator, "subdued")}>·</span>{" "}
          <Link
            href={makeContextualHref({ photo: nextId })}
            as={`/photo/${nextId}`}
            scroll={false}
          >
            <a className="link">Next</a>
          </Link>
        </nav>
      </article>
    </>
  );
}
