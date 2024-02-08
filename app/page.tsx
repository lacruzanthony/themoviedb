import { movies } from "@/services/movies";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { PosterArtwork } from "@/components/ui/poster-artwork";
import { Movie } from "@/types/movie";
import { tvShows } from "@/services/tv-shows";

export default async function Home() {
  const topMovies = await movies();
  const topShows = await tvShows();

  return (
    <div className="h-full px-4 py-6 lg:px-8">
      <Tabs defaultValue="movies" className="h-full space-y-6">
        <TabsList>
          <TabsTrigger value="movies">Movies</TabsTrigger>
          <TabsTrigger value="shows">TV Shows</TabsTrigger>
        </TabsList>
        <TabsContent value="movies">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Top movies
              </h2>
              <p className="text-sm text-muted-foreground">
                Top picks for you. Updated daily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex flex-wrap justify-center gap-4">
            {topMovies.map((movie: Movie) => (
              <PosterArtwork
                id={movie?.id.toString() || ""}
                key={movie?.title}
                aspectRatio="portrait"
                className="w-[250px]"
                width={300}
                height={450}
                posterPath={movie?.poster_path}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="shows">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Top TV Shows
              </h2>
              <p className="text-sm text-muted-foreground">
                Top picks for you. Updated daily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex flex-wrap justify-center gap-4">
            {topShows.map((tvShow: any) => (
              <PosterArtwork
                id={tvShow?.id.toString() || ""}
                key={tvShow?.title}
                aspectRatio="portrait"
                className="w-[250px]"
                width={300}
                height={450}
                posterPath={tvShow?.poster_path}
                isTvShow={true}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
