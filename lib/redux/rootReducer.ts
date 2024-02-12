/* Instruments */
import { movieSlice, tvShowsSlice } from "./slices";

export const reducer = {
  movies: movieSlice.reducer,
  tvShows: tvShowsSlice.reducer,
};
