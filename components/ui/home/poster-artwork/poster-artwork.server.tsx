import { imageUrl } from "@/lib/utils";
import { PosterArtWorkClient } from "./poster-artwork.client";
import StarRating from "../../start-rating";
import { FC } from "react";

export const PosterArtWorkServer: FC<PosterArtWorkServerType> = (props) => {
  const { poster_path, vote_average, name, title, isTvShow } = props;
  const posterPathUrl = imageUrl(poster_path);
  const posterName = isTvShow ? name : title;

  return (
    <PosterArtWorkClient
      posterPathUrl={posterPathUrl}
      posterName={posterName ?? ""}
      {...props}
    >
      <StarRating average={vote_average} isSimilar={false} />
    </PosterArtWorkClient>
  );
};

type PosterArtWorkServerType = {
  id: string;
  aspectRatio: string;
  className: string;
  width: number;
  height: number;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  isTvShow: boolean;
};
