import { movies } from "@/services/movies";
import { tvShows } from "@/services/tv-shows";
import { HomeServer } from "./home.server";
import { getPromiseSettledValue } from "@/lib/utils";
import { Suspense } from "react";

export const HomeWrapper = async () => {
  const values = await Promise.allSettled([movies(), tvShows()]);
  const topMovies = getPromiseSettledValue(values[0]);
  const topTvShows = getPromiseSettledValue(values[1]);

  return (
    <Suspense>
      <HomeServer topMovies={topMovies} topTvShows={topTvShows} />;
    </Suspense>
  );
};
