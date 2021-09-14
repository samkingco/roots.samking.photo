import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContextualRouting } from "next-use-contextual-routing";
import clsx from "clsx";
import { data, Photo } from "@content/index";
import { Image } from "@components/Image";
import { Modal } from "@components/Modal";
import { PhotoPage } from "@components/PhotoPage";
import { TextButton } from "@components/TextButton";
import styles from "@components/IndexPage.module.css";

enum Layout {
  SCROLL = "scroll",
  GRID = "grid",
}

export function IndexPage() {
  const router = useRouter();
  const { returnHref, makeContextualHref } = useContextualRouting();
  const [layout, setLayout] = useState<Layout>(Layout.SCROLL);
  const [modalPhoto, setModalPhoto] = useState<Photo | undefined>();
  const refs = useRef<Array<HTMLAnchorElement | null>>([]);
  const photoContainerRef = useRef<HTMLElement | null>(null);

  // Setup refs to photo links
  useEffect(() => {
    refs.current = refs.current.slice(0, data.length);
    return () => {
      refs.current = [];
    };
  }, [data]);

  const openSeaLink = "https://opensea.io/samkingco";
  const twitterLink = "https://twitter.com/samkingco";
  const instagramLink = "https://instagram.com/samkingco";

  const onModalClose = () => {
    if (modalPhoto) {
      const returnToPhotoId = modalPhoto.id;
      // Scroll to the image and set focus when the modal closes
      // setTimeout hack because of focus locking in @reach/dialog
      setTimeout(() => {
        if (refs.current[returnToPhotoId]) {
          // @ts-ignore: Object is possibly 'null'.
          refs.current[returnToPhotoId].scrollIntoView({
            block: "center",
            inline: "center",
          });
          // @ts-ignore: Object is possibly 'null'.
          refs.current[returnToPhotoId].focus();
        }
      }, 0);
    }

    router.push(returnHref, undefined, {
      scroll: false,
    });
  };

  const scrollToPhotoContainer = () => {
    if (photoContainerRef.current) {
      photoContainerRef.current.scrollIntoView(true);
    }
  };

  useEffect(() => {
    const photo = data.find((i) => `${i.id}` === router.query.photo);
    setModalPhoto(photo);
    return () => {
      setModalPhoto(undefined);
    };
  }, [router.query.photo]);

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
        <ul>
          <li>
            <p>Collection of {data.length} unique photographs for sale</p>
          </li>
          <li>
            <p>
              Launches on <a href={openSeaLink}>OpenSea</a> 10 October 2021
            </p>
          </li>
          <li>
            <p>
              <a href={twitterLink}>Twitter</a> and{" "}
              <a href={instagramLink}>Instagram</a> for updates
            </p>
          </li>
        </ul>
      </section>

      <section className={clsx(styles.section, styles.sectionControls)}>
        <div className={styles.controls}>
          <p className="subdued">View:</p>
          <TextButton
            onClick={() => {
              setLayout(Layout.SCROLL);
              scrollToPhotoContainer();
            }}
            showUnderline={layout === Layout.SCROLL}
          >
            Default
          </TextButton>
          <p className="subdued">|</p>
          <TextButton
            onClick={() => {
              setLayout(Layout.GRID);
              scrollToPhotoContainer();
            }}
            showUnderline={layout === Layout.GRID}
          >
            Grid
          </TextButton>
        </div>

        <nav className={styles.links}>
          <a href={openSeaLink} aria-label="OpenSea">
            OS
          </a>
          <span className="subdued">·</span>
          <a href={twitterLink} aria-label="Twitter">
            TW
          </a>
          <span className="subdued">·</span>
          <a href={instagramLink} aria-label="Instagram">
            IG
          </a>
        </nav>
      </section>

      <section
        className={clsx([styles.section, styles.sectionPhotos])}
        ref={photoContainerRef}
      >
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
                <a ref={(el) => (refs.current[photo.id] = el)}>
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
        a11yLabel={`Detail view of photo #${modalPhoto?.id}`}
        isOpen={Boolean(!!router.query.photo && modalPhoto)}
        onClose={onModalClose}
      >
        {modalPhoto && (
          <PhotoPage
            photo={modalPhoto}
            onClose={onModalClose}
            totalPhotos={data.length}
          />
        )}
      </Modal>
    </main>
  );
}
