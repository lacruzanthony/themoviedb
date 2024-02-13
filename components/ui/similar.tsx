import React from "react";
import { ScrollArea, ScrollBar } from "./scroll-area";
import { Separator } from "./separator";
import { TvShow } from "@/types/tv-show";
import { Movie } from "@/types/movie";
import { PosterArtWorkWrapper } from "./poster-artwork";

export const Similar = ({
  similars,
  isTvShow = false,
  isSimilar = true,
}: {
  similars: Movie[] | TvShow[];
  isTvShow?: boolean;
  isSimilar?: boolean;
}) => {
  const header = isTvShow ? "Similar TV Shows" : "Similar movies";
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
              <PosterArtWorkWrapper
                url={similar.url}
                key={similar.id}
                id={similar.id.toString()}
                isTvShow={isTvShow}
                aspectRatio="square"
                width={150}
                height={150}
                className="w-[150px]"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};
