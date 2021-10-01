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

export const data: Photo[] = [
  {
    id: 1,
    src: photo1,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594506675960414209",
  },
  {
    id: 2,
    src: photo2,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594461595983675393",
  },
  {
    id: 3,
    src: photo3,
    size: PhotoSize.LARGE,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594462695495303169",
  },
  {
    id: 4,
    src: photo4,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594463795006930945",
  },
  {
    id: 5,
    src: photo5,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594464894518558721",
  },
  {
    id: 6,
    src: photo6,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594465994030186497",
  },
  {
    id: 7,
    src: photo7,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594467093541814273",
  },
  {
    id: 8,
    src: photo8,
    size: PhotoSize.LARGE,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594468193053442049",
  },
  {
    id: 9,
    src: photo9,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594469292565069825",
  },
  {
    id: 10,
    src: photo10,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594470392076697601",
  },
  {
    id: 11,
    src: photo11,
    size: PhotoSize.LARGE,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594471491588325377",
  },
  {
    id: 12,
    src: photo12,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594472591099953153",
  },
  {
    id: 13,
    src: photo13,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594473690611580929",
  },
  {
    id: 14,
    src: photo14,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594474790123208705",
  },
  {
    id: 15,
    src: photo15,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594475889634836481",
  },
  {
    id: 16,
    src: photo16,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594476989146464257",
  },
  {
    id: 17,
    src: photo17,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594478088658092033",
  },
  {
    id: 18,
    src: photo18,
    size: PhotoSize.LARGE,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594480287681347585",
  },
  {
    id: 19,
    src: photo19,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594481387192975361",
  },
  {
    id: 20,
    src: photo20,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594482486704603137",
  },
  {
    id: 21,
    src: photo21,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594483586216230913",
  },
  {
    id: 22,
    src: photo22,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594484685727858689",
  },
  {
    id: 23,
    src: photo23,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594485785239486465",
  },
  {
    id: 24,
    src: photo24,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594486884751114241",
  },
  {
    id: 25,
    src: photo25,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594487984262742017",
  },
  {
    id: 26,
    src: photo26,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594489083774369793",
  },
  {
    id: 27,
    src: photo27,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594490183285997569",
  },
  {
    id: 28,
    src: photo28,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594491282797625345",
  },
  {
    id: 29,
    src: photo29,
    size: PhotoSize.LARGE,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594493481820880897",
  },
  {
    id: 30,
    src: photo30,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594494581332508673",
  },
  {
    id: 31,
    src: photo31,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594495680844136449",
  },
  {
    id: 32,
    src: photo32,
    size: PhotoSize.LARGE,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594496780355764225",
  },
  {
    id: 33,
    src: photo33,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594497879867392001",
  },
  {
    id: 34,
    src: photo34,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594498979379019777",
  },
  {
    id: 35,
    src: photo35,
    size: PhotoSize.LARGE,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594500078890647553",
  },
  {
    id: 36,
    src: photo36,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594501178402275329",
  },
  {
    id: 37,
    src: photo37,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594502277913903105",
  },
  {
    id: 38,
    src: photo38,
    size: PhotoSize.MEDIUM,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594503377425530881",
  },
  {
    id: 39,
    src: photo39,
    size: PhotoSize.SMALL,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594504476937158657",
  },
  {
    id: 40,
    src: photo40,
    size: PhotoSize.LARGE,
    opensea:
      "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80315836937641207968800901548207530326408651334473134547714594505576448786433",
  },
];
