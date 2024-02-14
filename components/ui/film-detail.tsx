"use client";

import { movieSlice, tvShowsSlice } from "@/lib/redux";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function FilmDetail({
  title,
  overview,
  backdrop,
  poster,
  isTvShow = false,
}: {
  title: string;
  overview: string;
  backdrop: string;
  poster: string;
  isTvShow?: boolean;
}) {
  const dispatch = useDispatch();
  isTvShow
    ? dispatch(
        tvShowsSlice.actions.setTvShow({ title, overview, poster, backdrop })
      )
    : dispatch(
        movieSlice.actions.setOneMovie({
          title,
          overview,
          backdrop,
          poster,
        })
      );
  return (
    <div
      className="p-8 relative h-90 bg-cover bg-no-repeat bg-center rounded-lg shadow-lg bg-[#d4d4d8]"
      style={{
        backgroundImage: `url(${backdrop})`,
        objectFit: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto flex">
        <Image
          alt="Film image"
          className="rounded-lg shadow-lg hidden lg:block"
          height="300"
          src={poster}
          width="200"
        />
        <div className="ml-8 text-black p-4 rounded-lg backdrop-blur-md">
          <h1 className="text-4xl font-bold">{title}</h1>
          <h2 className="mt-4 text-2xl font-bold">Overview</h2>
          <p className="mt-2 text-lg">{overview}</p>
        </div>
      </div>
    </div>
  );
}
