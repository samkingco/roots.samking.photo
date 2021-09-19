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
import { VisuallyHidden } from "./VisuallyHidden";

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
  const [showExcerpt, setShowExcerpt] = useState(false);

  // Setup refs to photo links
  useEffect(() => {
    refs.current = refs.current.slice(0, data.length);
    return () => {
      refs.current = [];
    };
  }, []);

  const openSeaLink = "https://opensea.io/collection/roots-by-sam-king";
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
        <p className="sans">
          It&apos;s hard to fully describe the feeling I get when I visit
          Scotland and the Highlands. There&apos;s always a natural pull for me
          to spend time there, just being outdoors. I have family roots there so
          it feels strangely homely even though I&apos;ve never lived in
          Scotland. I don&apos;t know much about my heritage other than I have a
          couple of distant relatives still in the Orkney Islands. My Nan has
          told me stories of her family catching lobsters and storing them in
          the basement, and shown me old photographs of days where there was no
          wind and the washing on the line was hanging vertically—a normal sight
          for most people, but a novelty for those on Orkney. The Scottish are a
          hardy people, a trait I don&apos;t think I have. I&apos;ve grown up in
          the South of England with warm weather and creature comforts,
          something you don&apos;t get very often in the depths of the
          Highlands.
        </p>
        {!showExcerpt && (
          <TextButton
            className={styles.readMoreButton}
            onClick={() => setShowExcerpt(true)}
          >
            Read full excerpt
          </TextButton>
        )}
        <VisuallyHidden isHidden={!showExcerpt}>
          <p className="sans">
            Being in the Highlands gives me a sense of wonder that these are the
            lands my ancestors once traveled through. The effect is calming but
            also strangely primal, a subtle undertone of anxiousness, similar to
            how my ancestors must have felt looking for food or shelter. A
            feeling of comfort and discomfort at the same time. This is only
            compounded by the dense fog that rolls in over the mountains,
            suffocating the landscape. Your vision being impaired only heightens
            the anxious feeling. When it clears though, there&apos;s a wave of
            relief and the air feels crisp, filled with the smell of pines and
            firs.
          </p>
          <p className="sans">
            The following images try to capture that feeling while showing the
            rugged beauty of this amazing landscape. Being both in awe and
            swarmed by the mountains and fog. An inviting yet hostile place.
          </p>
        </VisuallyHidden>

        <hr />

        <h3>Sale details</h3>
        <ul>
          <li>
            <p>Collection of {data.length} unique photographs for sale</p>
          </li>
          <li>
            <p>
              Available to buy on <a href={openSeaLink}>OpenSea</a> soon
            </p>
          </li>
          <li>
            <p>Initial price of 0.1 ETH each</p>
          </li>
          <li>
            <p>
              Follow <a href={twitterLink}>Twitter</a> or{" "}
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
