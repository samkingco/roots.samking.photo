import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Photo } from "@content/index";
import { Image } from "@components/Image";
import { TextButton } from "@components/TextButton";
import styles from "@components/PhotoPage.module.css";

interface Props {
  photo: Photo;
  onClose?: () => void;
  closeHref?: string;
}

export function PhotoPage({ photo, onClose, closeHref }: Props) {
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
        {/* TODO: Add next and prev links */}
      </article>
    </>
  );
}
