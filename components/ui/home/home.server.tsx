import { Movie } from "@/types/movie";
import { TvShow } from "@/types/tv-show";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListContent } from "../list-content";

export const HomeServer = ({
  topMovies,
  topTvShows,
}: {
  topMovies: Movie[];
  topTvShows: TvShow[];
}) => {
  return (
    <div className="h-full px-4 py-6 lg:px-8">
      <Tabs defaultValue="movies" className="h-full space-y-6">
        <TabsList>
          <TabsTrigger value="movies">Movies</TabsTrigger>
          <TabsTrigger value="shows">TV Shows</TabsTrigger>
        </TabsList>
        <TabsContent value="movies">
          <ListContent list={topMovies} />
        </TabsContent>
        <TabsContent value="shows">
          <ListContent list={topTvShows} isTvShow />
        </TabsContent>
      </Tabs>
    </div>
  );
};
