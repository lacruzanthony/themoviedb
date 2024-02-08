import Image from "next/image";

export default async function FilmDetail({
  title,
  overview,
  backdrop,
  poster,
}: {
  title: string;
  overview: string;
  backdrop: string;
  poster: string;
}) {
  return (
    <div
      className="p-8 relative h-90 bg-cover bg-no-repeat bg-center rounded-lg shadow-lg hover:backdrop-blur-lg"
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
        <div className="ml-8 text-white bg-zinc-500/20 p-4 rounded-lg backdrop-blur">
          <h1 className="text-4xl font-bold">{title}</h1>
          <h2 className="mt-4 text-2xl font-bold">Overview</h2>
          <p className="mt-2 text-lg">{overview}</p>
        </div>
      </div>
    </div>
  );
}
