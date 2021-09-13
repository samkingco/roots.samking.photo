import { useState } from "react";
import NextImage, { ImageProps } from "next/image";
import clsx from "clsx";
import styles from "./Image.module.css";

interface Props extends ImageProps {
  withPlaceholderBG?: boolean;
}

export function Image({
  className,
  withPlaceholderBG = true,
  ...props
}: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={clsx(
        styles.imageWrapper,
        withPlaceholderBG && styles.withPlaceholderBG
      )}
    >
      <NextImage
        {...props}
        className={clsx(
          className,
          loaded ? styles.imageLoaded : styles.imageLoading
        )}
        onLoadingComplete={() => {
          setLoaded(true);
        }}
      />
    </div>
  );
}
