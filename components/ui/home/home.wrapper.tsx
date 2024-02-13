import { movies } from "@/services/movies";
import { tvShows } from "@/services/tv-shows";
import { HomeServer } from "./home.server";
import { getPromiseSettledValue } from "@/lib/utils";
import { Suspense } from "react";
import { Movie } from "@/types/movie";
import { TvShow } from "@/types/tv-show";

export const HomeWrapper = async () => {
  const values = await Promise.allSettled([movies(), tvShows()]);
  const topMovies: Movie[] = getPromiseSettledValue(values[0]);
  const topTvShows: TvShow[] = getPromiseSettledValue(values[1]);
  const topMoviesMap = topMovies.map((movie) => ({
    ...movie,
    url: `/movie/${movie.id}`,
  }));
  const topTvShowMap = topTvShows.map((show) => ({
    ...show,
    url: `/show/${show.id}`,
  }));

  return (
    <Suspense>
      <HomeServer topMovies={topMoviesMap} topTvShows={topTvShowMap} />;
    </Suspense>
  );
};
