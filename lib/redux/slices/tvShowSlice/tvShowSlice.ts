/* Core */
import { TvShow } from "@/types/tv-show";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: TvShowsSliceState = {
  value: [],
  status: "idle",
};

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState,
  reducers: {
    setTvShows: (state, action: PayloadAction<TvShow[]>) => {
      state.value = [...state.value, ...action.payload];
    },
    setTvShow: (state, action: PayloadAction<TvShow>) => {
      state.value = [...state.value, action.payload];
    },
  },
});

/* Types */
export interface TvShowsSliceState {
  value: TvShow[];
  status: "idle" | "loading" | "failed";
}
