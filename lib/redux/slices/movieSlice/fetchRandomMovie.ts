import { Movie } from "@/types/movie";

export const fetchRandomMovie = async (
  amount = [1]
): Promise<{ data: Movie }> => {
  // TODO: fetch the random movie from the themoviedb service.
  const response = await fetch("http://localhost:3000/api/random-movie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });
  const result = await response.json();

  return result;
};
