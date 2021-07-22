import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iBookshelf } from "./interfaces";

const initialState = {
  title: "",
  number: 0
} as iBookshelf;

const bookshelfSlice = createSlice({
  name: "BookshelfSlice",
  initialState,
  reducers: {
    addNew(state, action: PayloadAction<iBookshelf>) {
      state.title = action.payload.title;
    }
  }
});

const { actions, reducer } = bookshelfSlice;

export const { addNew } = actions;
export default reducer;
