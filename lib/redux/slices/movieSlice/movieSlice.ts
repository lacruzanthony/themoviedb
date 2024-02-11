/* Core */
import { Movie } from "@/types/movie";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { setMovieAsync } from "./thunks";

const initialState: MovieSliceState = {
  value: [],
  status: "idle",
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.value.concat(action.payload);
    },
    setOneMovie: (state, action: PayloadAction<Movie>) => {
      state.value.concat(action.payload);
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(setMovieAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setMovieAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.concat(action.payload);
      });
  },
});

/* Types */
export interface MovieSliceState {
  value: Movie[];
  status: "idle" | "loading" | "failed";
}
