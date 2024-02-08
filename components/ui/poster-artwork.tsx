import Image from "next/image";
import { cn, imageUrl } from "@/lib/utils";
import { movieDetails } from "@/services/movies";
import { tvShowDetails } from "@/services/tv-shows";
import StarRating from "./start-rating";
import Link from "next/link";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  aspectRatio?: "portrait" | "square";
  posterPath?: string;
  key?: string;
  width?: number;
  height?: number;
  isSimilar?: boolean;
  isTvShow?: boolean;
}

export const PosterArtwork = async ({
  id,
  aspectRatio = "portrait",
  posterPath,
  width,
  height,
  key,
  className,
  isSimilar = false,
  isTvShow = false,
  ...props
}: AlbumArtworkProps) => {
  const { poster_path, title, name, vote_average } = isTvShow
    ? await tvShowDetails(id)
    : await movieDetails(id);
  const href = isTvShow ? `show/${id}` : `movie/${id}`;

  console.log({ poster_path });

  return (
    <div className={cn("space-y-3 ", className)} {...props}>
      <div className="rounded-md max-w-xs m-2 overflow-hidden ">
        <Link href={href}>
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
        </Link>
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none truncate">
          {isTvShow ? name : title}
        </h3>
        <p className="text-xs text-muted-foreground">People votes:</p>
        <StarRating average={vote_average} />
      </div>
    </div>
  );
};
