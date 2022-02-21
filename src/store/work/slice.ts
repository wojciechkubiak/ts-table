import { createSlice } from "@reduxjs/toolkit";
import { WorkData } from "../../models/Work";
import { fetchWorkData } from "./actions";

interface IWorkState {
  works: WorkData[];
  isLoading: boolean;
  error?: string;
}

const initialState: IWorkState = {
  works: [],
  isLoading: true,
  error: "",
};

const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    clearData(state) {
      state.works = [];
      state.isLoading = false;
      state.error = "";
    },
    hideLoading(state) {
      state.isLoading = false;
    },
    cleanError(state) {
      state.error = "";
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchWorkData.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(fetchWorkData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = "";
      state.works = payload;
    });
    addCase(fetchWorkData.rejected, (state, error) => {
      state.isLoading = false;
      state.error = error.error.message;
    });
  },
});

export const { clearData, cleanError, hideLoading } = workSlice.actions;
export const workReducer = workSlice.reducer;
