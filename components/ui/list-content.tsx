import { Movie } from "@/types/movie";
import { TvShow } from "@/types/tv-show";
import { Separator } from "@/components/ui/separator";
import { PosterArtWorkWrapper } from "./poster-artwork";

export const ListContent = ({
  list,
  isTvShow = false,
}: {
  list: Movie[] | TvShow[];
  isTvShow?: boolean;
}) => {
  const topTitle = isTvShow ? "shows" : "movies";

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Top {topTitle}
          </h2>
          <p className="text-sm text-muted-foreground">
            Top picks for you. Updated daily.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-wrap justify-center gap-4">
        {list.map((item) => (
          <PosterArtWorkWrapper
            url={item.url}
            key={item.id}
            id={item.id.toString()}
            isTvShow={isTvShow}
            width={250}
            height={250}
            className="w-250px"
            aspectRatio="portrait"
          />
        ))}
      </div>
    </>
  );
};
