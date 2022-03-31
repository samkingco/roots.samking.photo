import { PhotoPage } from "components/PhotoPage";
import { content, Photo } from "data-site/index";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<{
  photo: Photo;
  totalPhotos: number;
}> = async (context) => {
  const { id } = context.params as Params;
  const photo = content.find((i) => `${i.tokenId}` === id) as Photo;
  return { props: { photo, totalPhotos: content.length } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = content.map((photo) => ({
    params: { id: `${photo.tokenId}` },
  }));

  return { paths, fallback: false };
};

export default function ID(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { photo, totalPhotos } = props;
  return <PhotoPage photo={photo} closeHref="/" totalPhotos={totalPhotos} />;
}
