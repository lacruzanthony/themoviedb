import { movies } from "@/services/movies";
import { movieDetails } from "@/services/movies/movie-details";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PosterArtwork } from "@/components/ui/poster-artwork";
import { Movies } from "@/types/movies";
import { tvShows } from "@/services/tv-shows";

export default async function Home() {
  const dataMovies = await movies();
  const topMovies: Partial<Movies[]> = dataMovies;
  const dataTvShows = await tvShows();

  return (
    <div className="bg-background">
      <div className="border-t">
        <div className="col-span-3 lg:col-span-4 lg:border-l">
          <div className="h-full px-4 py-6 lg:px-8">
            <Tabs defaultValue="shows" className="h-full space-y-6">
              <TabsList>
                <TabsTrigger value="shows">TV Shows</TabsTrigger>
                <TabsTrigger value="movies">Movies</TabsTrigger>
              </TabsList>
              <TabsContent value="shows">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Listen Now
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Top picks for you. Updated daily.
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex flex-wrap justify-center gap-4">
                  {topMovies.map((movie) => (
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
              <TabsContent value="movies">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Listen Now
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Top picks for you. Updated daily.
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex flex-wrap justify-center gap-4">
                  {dataTvShows.map((tvShow: any) => (
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
        </div>
      </div>
    </div>
  );
}
