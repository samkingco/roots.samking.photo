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

export enum PhotoSize {
  SMALL = "photoSmall",
  MEDIUM = "photoMedium",
  LARGE = "photoLarge",
}

export interface Photo {
  tokenId: number;
  src: StaticImageData;
  size: PhotoSize;
}

export const data: Photo[] = [
  {
    tokenId: 1,
    src: photo1,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 2,
    src: photo2,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 3,
    src: photo3,
    size: PhotoSize.LARGE,
  },
  {
    tokenId: 4,
    src: photo4,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 5,
    src: photo5,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 6,
    src: photo6,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 7,
    src: photo7,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 8,
    src: photo8,
    size: PhotoSize.LARGE,
  },
  {
    tokenId: 9,
    src: photo9,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 10,
    src: photo10,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 11,
    src: photo11,
    size: PhotoSize.LARGE,
  },
  {
    tokenId: 12,
    src: photo12,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 13,
    src: photo13,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 14,
    src: photo14,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 15,
    src: photo15,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 16,
    src: photo16,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 17,
    src: photo17,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 18,
    src: photo18,
    size: PhotoSize.LARGE,
  },
  {
    tokenId: 19,
    src: photo19,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 20,
    src: photo20,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 21,
    src: photo21,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 22,
    src: photo22,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 23,
    src: photo23,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 24,
    src: photo24,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 25,
    src: photo25,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 26,
    src: photo26,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 27,
    src: photo27,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 28,
    src: photo28,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 29,
    src: photo29,
    size: PhotoSize.LARGE,
  },
  {
    tokenId: 30,
    src: photo30,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 31,
    src: photo31,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 32,
    src: photo32,
    size: PhotoSize.LARGE,
  },
  {
    tokenId: 33,
    src: photo33,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 34,
    src: photo34,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 35,
    src: photo35,
    size: PhotoSize.LARGE,
  },
  {
    tokenId: 36,
    src: photo36,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 37,
    src: photo37,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 38,
    src: photo38,
    size: PhotoSize.MEDIUM,
  },
  {
    tokenId: 39,
    src: photo39,
    size: PhotoSize.SMALL,
  },
  {
    tokenId: 40,
    src: photo40,
    size: PhotoSize.LARGE,
  },
];
