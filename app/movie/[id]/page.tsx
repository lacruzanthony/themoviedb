import FilmDetail from "@/components/ui/film-detail";
import { movieDetails, similarMovies } from "@/services/movies";
import { imageUrl } from "@/lib/utils";
import { Similar } from "@/components/ui/similar";
import { Movie } from "@/types/movie";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { backdrop_path, title, overview, poster_path } = await movieDetails(
    id
  );
  const similars: Movie[] = await similarMovies(id);
  const backdrop = imageUrl(backdrop_path, "w1280");
  const poster = imageUrl(poster_path);
  const similarsMap = similars.map((similar) => ({
    ...similar,
    url: similar.id.toString(),
  }));

  return (
    <>
      <div className="h-full px-4 py-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Movie Details</h2>
        <FilmDetail
          poster={poster}
          overview={overview}
          title={title}
          backdrop={backdrop}
        />
        <Similar similars={similarsMap} />
      </div>
    </>
  );
}
