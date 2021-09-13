import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContextualRouting } from "next-use-contextual-routing";
import clsx from "clsx";
import { data, Photo } from "../content";
import { Image } from "../components/Image";
import { Modal } from "../components/Modal";
import { PhotoPage } from "../components/PhotoPage";
import { TextButton } from "../components/TextButton";
import styles from "../styles/IndexPage.module.css";

enum Layout {
  SCROLL = "scroll",
  GRID = "grid",
}

export default function IndexPage() {
  const router = useRouter();
  const { returnHref, makeContextualHref } = useContextualRouting();
  const [layout, setLayout] = useState<Layout>(Layout.SCROLL);
  const [modalPhoto, setModalPhoto] = useState<Photo | undefined>();

  const openSeaLink = "https://opensea.io/samkingco";
  const twitterLink = "https://twitter.com/samkingco";
  const instagramLink = "https://instagram.com/samkingco";

  const onModalClose = () => {
    router.push(returnHref, undefined, {
      scroll: false,
    });
  };

  return (
    <main>
      <section
        className={clsx(
          styles.section,
          styles.sectionText,
          styles.withDottedBorder
        )}
      >
        <h1>Roots</h1>
        <h3 className="subdued">
          By <a href="https://samking.photo">Sam King</a>
        </h3>
        <p>
          Praesent sed auctor tortor. Vivamus ac placerat est, eu varius metus.
          Proin egestas massa ut nisi faucibus condimentum. Quisque posuere orci
          nec nulla pellentesque, vel pretium urna dignissim. Maecenas dictum
          vel turpis vitae vulputate. Fusce venenatis vulputate eros, in
          imperdiet neque. Donec urna ante, condimentum quis pharetra ut,
          tristique vel neque. Cras sit amet tincidunt metus. Phasellus a quam
          maximus, faucibus erat at, laoreet nisi.
        </p>
        <hr />
        <p>
          Collection of {data.length} photos dropping on{" "}
          <a href={openSeaLink}>OpenSea</a> 01/10/2021.
        </p>
        <p>
          Follow on <a href={twitterLink}>Twitter</a> and{" "}
          <a href={instagramLink}>Instagram</a> for updates.
        </p>
      </section>

      <section className={clsx(styles.section, styles.sectionControls)}>
        <div className={styles.controls}>
          <p className="subdued">View:</p>
          <TextButton
            onClick={() => setLayout(Layout.SCROLL)}
            showUnderline={layout === Layout.SCROLL}
          >
            Default
          </TextButton>
          <p className="subdued">|</p>
          <TextButton
            onClick={() => setLayout(Layout.GRID)}
            showUnderline={layout === Layout.GRID}
          >
            Grid
          </TextButton>
        </div>

        <nav className={styles.links}>
          <a href={openSeaLink} aria-label="OpenSea">
            OS
          </a>
          <a href={twitterLink} aria-label="Twitter">
            TW
          </a>
          <a href={instagramLink} aria-label="Instagram">
            IG
          </a>
        </nav>
      </section>

      <section className={styles.section}>
        <ol className={styles[`${layout}Layout`]}>
          {data.map((photo) => (
            <li
              key={photo.id}
              className={clsx([styles.photoWrapper, styles[photo.size]])}
            >
              <p>
                {photo.id}.{photo.description ? ` ${photo.description}` : ""}
              </p>
              <Link
                href={makeContextualHref({ photo: photo.id })}
                as={`/photo/${photo.id}`}
                scroll={false}
              >
                <a
                  onClick={() => {
                    setModalPhoto(photo);
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt || ""}
                    title={photo.description || ""}
                    layout="responsive"
                  />
                </a>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <Modal
        a11yLabel="Detail view of photo"
        isOpen={Boolean(!!router.query.photo && modalPhoto)}
        onClose={onModalClose}
      >
        {/* TODO: Add next and prev links */}
        {modalPhoto && <PhotoPage photo={modalPhoto} onClose={onModalClose} />}
      </Modal>
    </main>
  );
}
