import FilmDetail from "@/components/ui/film-detail";
import { similarMovies } from "@/services/movies";
import { imageUrl } from "@/lib/utils";
import { Similar } from "@/components/ui/similar";
import { tvShowDetails } from "@/services/tv-shows";

export default async function ShowDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { backdrop_path, name, overview, poster_path } = await tvShowDetails(
    id
  );
  const similar = await similarMovies(id);
  const backdrop = imageUrl(backdrop_path, "w1280");
  const poster = imageUrl(poster_path);

  console.log({ poster });

  return (
    <>
      <div className="h-full px-4 py-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          TV Show Details
        </h2>
        <FilmDetail
          poster={poster}
          overview={overview}
          title={name}
          backdrop={backdrop}
        />
        <Similar similars={similar.results} isSimilar />
      </div>
    </>
  );
}
