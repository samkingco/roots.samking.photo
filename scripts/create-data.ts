import fs from "fs";
import path from "path";
import exifr from "exifr";

interface Attribute {
  trait_type: string;
  value: string;
}

interface Metadata {
  name: string;
  description: string;
  image: string;
  external_url: string;
  attributes: Attribute[];
}

async function main() {
  const tokens: Record<string, Metadata> = {};
  const files = fs.readdirSync(path.join(process.cwd(), "token-data/images"));

  for (const file of files) {
    const ext = path.extname(file);
    if (ext === ".jpg") {
      const tokenId = file.replace(ext, "");
      const exif = await exifr.parse(
        path.join(process.cwd(), `token-data/images/${file}`)
      );

      tokens[tokenId] = {
        name: `Roots #${tokenId}`,
        description:
          "Roots is a collection of photographs that explore Sam King's connection to the Scottish Highlands. Being in the Highlands gives Sam a sense of wonder that these are the lands his ancestors once traveled through. The effect is calming but also strangely primal, a subtle undertone of anxiousness. The images try to capture that feeling while showing the rugged beauty of the amazing landscape. Being both in awe and swarmed by the mountains and fog. An inviting yet hostile place.",
        image: `${process.env.BASE_CONTENT_URI}${tokenId}.jpg`,
        external_url: `https://roots.samking.photo/photo/${tokenId}`,
        attributes: [
          { trait_type: "Exposure", value: `1/${1 / exif.ExposureTime}s` },
          { trait_type: "Aperture", value: `ƒ/${exif.FNumber}` },
          { trait_type: "ISO", value: `${exif.ISO}` },
          { trait_type: "Focal length", value: `${exif.FocalLength}mm` },
        ],
      };
    }
  }

  for (const [tokenId, metadata] of Object.entries(tokens)) {
    fs.writeFileSync(
      path.join(process.cwd(), `token-data/metadata/${tokenId}`),
      JSON.stringify(metadata)
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
