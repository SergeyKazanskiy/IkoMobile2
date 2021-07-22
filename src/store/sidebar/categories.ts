import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { iCategory, iCategories } from "./types";
import { swapItems } from "../../global";

const initialState: iCategories = {
  currentId: "",
  items: []
};

export const categories = createSlice({
  name: "categoriesSlice",
  initialState,
  reducers: {
    selectCategory(state, action: PayloadAction<iCategory>) {
      state.currentId = action.payload.id;
    },
    updateCategory(state, action: PayloadAction<iCategory>) {
      const item = state.items[action.payload.number];
      item.title = action.payload.title;
    },
    addCategory: {
      reducer: (state, action: PayloadAction<iCategory>) => {
        const length = state.items.length;
        action.payload.number = length;
        state.items.push(action.payload);
      },
      prepare: (title: string, number: number) => {
        const id = nanoid();
        return { payload: { id, number, title } };
      }
    },
    removeCategory(state, action: PayloadAction<iCategory>) {
      state.items.filter((item) => item.id !== action.payload.id);
      state.currentId = state.items[0].id;
    },
    moveLeftCategory(state, action: PayloadAction<iCategory>) {
      const n = action.payload.number;
      swapItems(state.items, n - 1, n);
    },
    moveRightCategory(state, action: PayloadAction<iCategory>) {
      const n = action.payload.number;
      swapItems(state.items, n, n + 1);
    }
  } /*
  extraReducers: (builder) => {
    builder.addCase(addNew, (state, action) => {
      state.title = "eeee";
    });
  }*/
});
