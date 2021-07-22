import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iBookcase, iBookshelf } from "./interfaces";
import { bookshelfSlice } from "./Bookshelf";

const initialState: iBookcase = {
  title: "inputName",
  number: 1,
  bookshelves: []
};

const test2 = bookshelfSlice.reducer(
  { title: "inputName", number: 1 },
  bookshelfSlice.actions.addNew
) as iBookshelf;

export const bookcaseSlice = createSlice({
  name: "BookcaseSlice",
  initialState,
  reducers: {
    addNew(state, action: PayloadAction<iBookshelf>) {
      state.title = action.payload.title;
      state.number = action.payload.number;
    },
    addBookshelf(state, action: PayloadAction<iBookshelf>) {
      state.bookshelves = [...state.bookshelves, test2];
    },
    removeBookshelf(state, action: PayloadAction<iBookshelf>) {
      state.bookshelves.filter(
        (Bookshelf) => Bookshelf.number !== action.payload.number
      );
    }
  }
});
