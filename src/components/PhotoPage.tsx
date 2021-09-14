import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContextualRouting } from "next-use-contextual-routing";
import Head from "next/head";
import { Photo } from "@content/index";
import { Image } from "@components/Image";
import { TextButton } from "@components/TextButton";
import styles from "@components/PhotoPage.module.css";

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

  const prevId = wrap(1, totalPhotos + 1, photo.id - 1);
  const nextId = wrap(1, totalPhotos + 1, photo.id + 1);

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

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [prevId, nextId, downHandler]);

  let closeContent = null;

  if (closeHref) {
    closeContent = (
      <Link href={closeHref}>
        <a>Full collection</a>
      </Link>
    );
  }

  if (onClose) {
    closeContent = <TextButton onClick={onClose}>ESC</TextButton>;
  }

  return (
    <>
      <Head>
        <title>Photo #{photo.id} | Roots</title>
      </Head>
      <article className={styles.page}>
        <div>
          <nav className={styles.nav}>
            {closeContent}
            <Link href={photo.opensea}>
              <a>View on OpenSea</a>
            </Link>
          </nav>
          <p>
            {photo.id}.{photo.description ? ` ${photo.description}` : ""}
          </p>
        </div>
        <Image
          className={styles.image}
          src={photo.src}
          alt={photo.alt || ""}
          title={photo.description || ""}
          layout="fill"
          objectFit="contain"
          objectPosition="left top"
          withPlaceholderBG={false}
        />
        <nav className={styles.pagination}>
          <Link
            href={makeContextualHref({ photo: prevId })}
            as={`/photo/${prevId}`}
            scroll={false}
          >
            <a>Prev</a>
          </Link>
          <Link
            href={makeContextualHref({ photo: nextId })}
            as={`/photo/${nextId}`}
            scroll={false}
          >
            <a>Next</a>
          </Link>
        </nav>
      </article>
    </>
  );
}
