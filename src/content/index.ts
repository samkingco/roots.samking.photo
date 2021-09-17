import photo1 from "@content/photos/1.jpg";
import photo2 from "@content/photos/2.jpg";
import photo3 from "@content/photos/3.jpg";
import photo4 from "@content/photos/4.jpg";
import photo5 from "@content/photos/5.jpg";
import photo6 from "@content/photos/6.jpg";
import photo7 from "@content/photos/7.jpg";
import photo8 from "@content/photos/8.jpg";
import photo9 from "@content/photos/9.jpg";
import photo10 from "@content/photos/10.jpg";
import photo11 from "@content/photos/11.jpg";
import photo12 from "@content/photos/12.jpg";
import photo13 from "@content/photos/13.jpg";
import photo14 from "@content/photos/14.jpg";
import photo15 from "@content/photos/15.jpg";
import photo16 from "@content/photos/16.jpg";
import photo17 from "@content/photos/17.jpg";
import photo18 from "@content/photos/18.jpg";
import photo19 from "@content/photos/19.jpg";
import photo20 from "@content/photos/20.jpg";
import photo21 from "@content/photos/21.jpg";
import photo22 from "@content/photos/22.jpg";
import photo23 from "@content/photos/23.jpg";
import photo24 from "@content/photos/24.jpg";
import photo25 from "@content/photos/25.jpg";
import photo26 from "@content/photos/26.jpg";
import photo27 from "@content/photos/27.jpg";
import photo28 from "@content/photos/28.jpg";
import photo29 from "@content/photos/29.jpg";
import photo30 from "@content/photos/30.jpg";
import photo31 from "@content/photos/31.jpg";
import photo32 from "@content/photos/32.jpg";
import photo33 from "@content/photos/33.jpg";
import photo34 from "@content/photos/34.jpg";
import photo35 from "@content/photos/35.jpg";
import photo36 from "@content/photos/36.jpg";
import photo37 from "@content/photos/37.jpg";
import photo38 from "@content/photos/38.jpg";
import photo39 from "@content/photos/39.jpg";
import photo40 from "@content/photos/40.jpg";

export enum PhotoSize {
  SMALL = "photoSmall",
  MEDIUM = "photoMedium",
  LARGE = "photoLarge",
}

export interface Photo {
  id: number;
  src: StaticImageData;
  size: PhotoSize;
  description?: string;
  alt?: string;
  opensea: string;
}

const openseaBaseUrl = "https://opensea.io/samkingco";

export const data: Photo[] = [
  {
    id: 1,
    src: photo1,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 2,
    src: photo2,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 3,
    src: photo3,
    size: PhotoSize.LARGE,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 4,
    src: photo4,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 5,
    src: photo5,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 6,
    src: photo6,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 7,
    src: photo7,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 8,
    src: photo8,
    size: PhotoSize.LARGE,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 9,
    src: photo9,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 10,
    src: photo10,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 11,
    src: photo11,
    size: PhotoSize.LARGE,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 12,
    src: photo12,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 13,
    src: photo13,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 14,
    src: photo14,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 15,
    src: photo15,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 16,
    src: photo16,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 17,
    src: photo17,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 18,
    src: photo18,
    size: PhotoSize.LARGE,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 19,
    src: photo19,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 20,
    src: photo20,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 21,
    src: photo21,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 22,
    src: photo22,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 23,
    src: photo23,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 24,
    src: photo24,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 25,
    src: photo25,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 26,
    src: photo26,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 27,
    src: photo27,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 28,
    src: photo28,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 29,
    src: photo29,
    size: PhotoSize.LARGE,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 30,
    src: photo30,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 31,
    src: photo31,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 32,
    src: photo32,
    size: PhotoSize.LARGE,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 33,
    src: photo33,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 34,
    src: photo34,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 35,
    src: photo35,
    size: PhotoSize.LARGE,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 36,
    src: photo36,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 37,
    src: photo37,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 38,
    src: photo38,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 39,
    src: photo39,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 40,
    src: photo40,
    size: PhotoSize.LARGE,
    opensea: `${openseaBaseUrl}`,
  },
];
