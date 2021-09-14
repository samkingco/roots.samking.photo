import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { data, Photo } from "@content/index";
import { PhotoPage } from "@components/PhotoPage";

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<{
  photo: Photo;
  totalPhotos: number;
}> = async (context) => {
  const { id } = context.params as Params;
  const photo = data.find((i) => `${i.id}` === id) as Photo;
  return { props: { photo, totalPhotos: data.length } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map((photo) => ({
    params: { id: `${photo.id}` },
  }));

  return { paths, fallback: false };
};

export default function ID(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { photo, totalPhotos } = props;
  return <PhotoPage photo={photo} closeHref="/" totalPhotos={totalPhotos} />;
}
