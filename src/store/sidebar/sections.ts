import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { iSection, iSections } from "./types";
import { swapItems } from "../../global";

const initialState: iSections = {
  currentId: "",
  items: []
};

export const sections = createSlice({
  name: "sectionsSlice",
  initialState,
  reducers: {
    selectCategory(state, action: PayloadAction<iSection>) {
      state.currentId = action.payload.id;
    },
    updateCategory(state, action: PayloadAction<iSection>) {
      const item = state.items[action.payload.number];
      item.title = action.payload.title;
    },
    addCategory: {
      reducer: (state, action: PayloadAction<iSection>) => {
        const length = state.items.length;
        action.payload.number = length;
        state.items.push(action.payload);
      },
      prepare: (title: string, number: number) => {
        const id = nanoid();
        return { payload: { id, number, title } };
      }
    },
    removeCategory(state, action: PayloadAction<iSection>) {
      state.items.filter((item) => item.id !== action.payload.id);
      state.currentId = state.items[0].id;
    },
    moveLeftCategory(state, action: PayloadAction<iSection>) {
      const n = action.payload.number;
      swapItems(state.items, n - 1, n);
    },
    moveRightCategory(state, action: PayloadAction<iSection>) {
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
