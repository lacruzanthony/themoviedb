/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchRandomMovie } from "./fetchRandomMovie";
import { selectMovies } from "./selectors";
import { movieSlice } from "./movieSlice";
import type { ReduxThunkAction } from "@/lib/redux";
import { Movie } from "@/types/movie";

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const setMovieAsync = createAppAsyncThunk(
  "movies/fetchRandomMovie",
  async (amount: number[]) => {
    const response = await fetchRandomMovie(amount);

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const setOneMovieAsync =
  (movie: Movie): ReduxThunkAction =>
  (dispatch, getState) => {
    const currentValue = selectMovies(getState());

    if (currentValue.length > 2) {
      dispatch(movieSlice.actions.setOneMovie(movie));
    }
  };
