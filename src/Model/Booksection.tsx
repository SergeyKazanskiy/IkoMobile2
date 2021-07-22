import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iBooksection, iBookshelf } from "./interfaces";
import { addNew } from "./Bookshelf";

const initialState: iBooksection = {
  title: "inputName",
  number: 1,
  bookshelves: []
};

export const booksectionSlice = createSlice({
  name: "BooksectionSlice",
  initialState,
  reducers: {
    updateSection(state, action: PayloadAction<iBooksection>) {
      state.title = action.payload.title;
      state.number = action.payload.number;
    },
    addShelf: {
      reducer: (state, action: PayloadAction<iBookshelf>) => {
        state.bookshelves.push(action.payload);
      },
      prepare: (title: string) => {
        const number = 2;
        return { payload: { number, title } };
      }
    },
    removeShelf(state, action: PayloadAction<iBookshelf>) {
      state.bookshelves.filter(
        (Bookshelf) => Bookshelf.number !== action.payload.number
      );
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addNew, (state, action) => {
      state.title = "eeee";
    });
  }
});
