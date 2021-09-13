import React from "react";
import Link from "next/link";
import { Image } from "./Image";
import { Photo } from "../content";
import styles from "./PhotoPage.module.css";
import { TextButton } from "./TextButton";

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
    <article className={styles.wrapper}>
      <div>
        <nav className={styles.nav}>
          <Link href={photo.opensea}>
            <a>View on OpenSea</a>
          </Link>
          {closeContent}
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
  );
}
