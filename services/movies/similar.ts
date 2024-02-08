export const similarMovies = async (movieId: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_TMDB_TOKEN_AUTH}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar`,
      options
    );

    if (response.ok) {
      if (response.statusText === "No Content") {
        return { ok: true };
      }
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw error;
  }
};
