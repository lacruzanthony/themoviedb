import React from "react";
import { PosterArtwork } from "./poster-artwork";
import { ScrollArea, ScrollBar } from "./scroll-area";
import { Separator } from "./separator";
import { TvShow } from "@/types/tv-show";
import { Movie } from "@/types/movie";

export const Similar = ({
  similars,
  isTvShow = false,
  isSimilar = true,
}: {
  similars: Movie[] | TvShow[];
  isTvShow?: boolean;
  isSimilar?: boolean;
}) => {
  const header = isTvShow ? "Similar movies" : "Similar TV Shows";
  return (
    <div className="mb-10">
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">{header}</h2>
        <p className="text-sm text-muted-foreground">
          Recomendations based on the film.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {similars.map((similar) => (
              <PosterArtwork
                key={similar.id.toString()}
                id={similar.id.toString()}
                className="w-[150px] shadow-sm"
                aspectRatio="square"
                width={150}
                height={150}
                isSimilar={isSimilar}
                isTvShow={isTvShow}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};
