import Image from "next/image";
import { cn, imageUrl } from "@/lib/utils";
import { movieDetails } from "@/services/movies";
import { tvShowDetails } from "@/services/tv-shows";
import StarRating from "./start-rating";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  aspectRatio?: "portrait" | "square";
  posterPath?: string;
  key?: string;
  width?: number;
  height?: number;
  isTvShow?: boolean;
  isSimilar?: boolean;
}

export const PosterArtwork = async ({
  id,
  aspectRatio = "portrait",
  posterPath,
  width,
  height,
  key,
  className,
  isTvShow = false,
  isSimilar,
  ...props
}: AlbumArtworkProps) => {
  const { poster_path, title, name, vote_average } = isTvShow
    ? await tvShowDetails(id)
    : await movieDetails(id);

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="rounded-md max-w-xs m-2 overflow-hidden">
        <Image
          src={imageUrl(poster_path)}
          alt={key ?? ""}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{isTvShow ? name : title}</h3>
        <p className="text-xs text-muted-foreground">
          People votes:
          <StarRating isSimilar={isSimilar} average={vote_average} />
        </p>
      </div>
    </div>
  );
};
