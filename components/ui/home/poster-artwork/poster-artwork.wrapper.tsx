import { movieDetails } from "@/services/movies";
import { tvShowDetails } from "@/services/tv-shows";
import { PosterArtWorkServer } from "./poster-artwork.server";

export const PosterArtWorkWrapper = async ({
  id,
  isTvShow,
  aspectRatio,
  width,
  height,
  className,
}: {
  id: string;
  isTvShow: boolean;
  width: number;
  height: number;
  aspectRatio: "portrait" | "square";
  className: string;
}) => {
  const { poster_path, title, name, vote_average } = isTvShow
    ? await tvShowDetails(id)
    : await movieDetails(id);

  const props = {
    id,
    poster_path,
    title,
    name,
    vote_average,
    isTvShow,
    aspectRatio,
    width,
    height,
    className,
  };

  return <PosterArtWorkServer {...props} />;
};
