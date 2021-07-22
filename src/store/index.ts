import { createStore, combineReducers } from "redux";

import { categories } from "./sidebar/categories";
import { sections } from "./sidebar/sections";
import { shelfs } from "./sidebar/shelfs";
import { books } from "./sidebar/books";

const sidebarReducer = combineReducers({
  categories: categories.reducer,
  sections: sections.reducer,
  shelfs: shelfs.reducer,
  books: books.reducer
});

const rootReducer = combineReducers({
  sidebar: sidebarReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => createStore(rootReducer);

export default configureStore;
