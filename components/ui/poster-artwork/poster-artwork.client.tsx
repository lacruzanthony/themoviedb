"use client";

import { movieSlice, tvShowsSlice, useDispatch } from "@/lib/redux";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import { ImageWithFallback, fallbackImage } from "../image-with-fallback";

export const PosterArtWorkClient: FC<
  PropsWithChildren<PosterArtWorkClientType>
> = ({
  className,
  id,
  aspectRatio,
  width,
  height,
  children,
  posterPathUrl,
  posterName,
  url,
  isTvShow,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onClickHandler = () => {
    if (isTvShow) {
      dispatch(
        tvShowsSlice.actions.setTvShow({ id, posterPathUrl, posterName, url })
      );
    } else {
      dispatch(
        movieSlice.actions.setOneMovie({ id, posterPathUrl, posterName, url })
      );
    }
  };

  return (
    <div className={cn("space-y-3 ", className)}>
      <div className="rounded-md max-w-xs m-2 overflow-hidden ">
        <a
          href={url}
          onClick={(event) => {
            event.preventDefault();
            router.push(url);
          }}
        >
          <ImageWithFallback
            fallback={fallbackImage}
            alt={id}
            src={posterPathUrl}
            onClick={() => onClickHandler()}
            width={width}
            height={height}
            className={cn(
              "h-auto w-auto object-cover transition-all hover:scale-105",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
        </a>
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none truncate">{posterName}</h3>
        <p className="text-xs text-muted-foreground">People votes:</p>
        {children}
      </div>
    </div>
  );
};

type PosterArtWorkClientType = {
  id: string;
  className: string;
  posterPathUrl: string;
  width: number;
  height: number;
  aspectRatio: string;
  posterName: string;
  url: string;
  isTvShow: boolean;
};
