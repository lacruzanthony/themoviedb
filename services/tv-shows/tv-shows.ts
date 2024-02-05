export const tvShows = async (time_window = "day", language = "en_US") => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_TMDB_TOKEN_AUTH}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/${time_window}?language=${language}`,
      options
    );

    if (response.ok) {
      if (response.statusText === "No Content") {
        return { ok: true };
      }
      const data = await response.json();
      return data.results;
    }
  } catch (error) {
    throw error;
  }
};
