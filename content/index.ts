import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";
import photo8 from "./photos/8.jpg";
import photo9 from "./photos/9.jpg";
import photo10 from "./photos/10.jpg";
import photo11 from "./photos/11.jpg";
import photo12 from "./photos/12.jpg";
import photo13 from "./photos/13.jpg";
import photo14 from "./photos/14.jpg";
import photo15 from "./photos/15.jpg";
import photo16 from "./photos/16.jpg";
import photo17 from "./photos/17.jpg";
import photo18 from "./photos/18.jpg";
import photo19 from "./photos/19.jpg";
import photo20 from "./photos/20.jpg";
import photo21 from "./photos/21.jpg";
import photo22 from "./photos/22.jpg";
import photo23 from "./photos/23.jpg";
import photo24 from "./photos/24.jpg";
import photo25 from "./photos/25.jpg";
import photo26 from "./photos/26.jpg";
import photo27 from "./photos/27.jpg";
import photo28 from "./photos/28.jpg";
import photo29 from "./photos/29.jpg";
import photo30 from "./photos/30.jpg";
import photo31 from "./photos/31.jpg";
import photo32 from "./photos/32.jpg";
import photo33 from "./photos/33.jpg";
import photo34 from "./photos/34.jpg";
import photo35 from "./photos/35.jpg";
import photo36 from "./photos/36.jpg";
import photo37 from "./photos/37.jpg";
import photo38 from "./photos/38.jpg";
import photo39 from "./photos/39.jpg";
import photo40 from "./photos/40.jpg";
import photo41 from "./photos/41.jpg";
import photo42 from "./photos/42.jpg";
import photo43 from "./photos/43.jpg";
import photo44 from "./photos/44.jpg";
import photo45 from "./photos/45.jpg";
import photo46 from "./photos/46.jpg";
import photo47 from "./photos/47.jpg";
import photo48 from "./photos/48.jpg";
import photo49 from "./photos/49.jpg";
import photo50 from "./photos/50.jpg";

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
    description:
      "Snowy mountain ranges… a long description that probably wraps on multiple lines",
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
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 10,
    src: photo10,
    size: PhotoSize.SMALL,
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
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 15,
    src: photo15,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 16,
    src: photo16,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 17,
    src: photo17,
    size: PhotoSize.MEDIUM,
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
  {
    id: 41,
    src: photo41,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 42,
    src: photo42,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 43,
    src: photo43,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 44,
    src: photo44,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 45,
    src: photo45,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 46,
    src: photo46,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 47,
    src: photo47,
    size: PhotoSize.LARGE,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 48,
    src: photo48,
    size: PhotoSize.MEDIUM,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 49,
    src: photo49,
    size: PhotoSize.SMALL,
    opensea: `${openseaBaseUrl}`,
  },
  {
    id: 50,
    src: photo50,
    size: PhotoSize.LARGE,
    opensea: `${openseaBaseUrl}`,
  },
];
