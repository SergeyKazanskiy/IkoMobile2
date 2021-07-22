import "./styles.css";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { useReducer } from "react";

export interface iSection {
  title: string;
  number: number;
}

const initialState: iSection = {
  title: "testName",
  number: 1
};

export const sectionsSlice = createSlice({
  name: "SectionSlice",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setNumber(state, action: PayloadAction<number>) {
      state.number = action.payload;
    }
  }
});

const { actions, reducer } = sectionsSlice;
const { setName, setNumber } = actions;

const store = configureStore({
  reducer
});

export default function App() {
  const [state, dispatch] = useReducer(reducer, store.getState());
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <dl>
        <dt>Термин 1</dt>
        <dd>{state.title}</dd>
        <dd>{state.number}</dd>
      </dl>
      <button onClick={() => dispatch(setName("ddd"))}>SetName</button>
      <button onClick={() => dispatch(setNumber(5))}>SetNumber</button>
    </div>
  );
}
