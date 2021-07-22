import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

// "внешние" операции
const incrementBy = createAction("incrementBy");
const decrementBy = createAction("decrementBy");

const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    multiply: {
      reducer: (state, action) => state * action.payload,
      prepare: (value) => ({ payload: value || 2 }) // страховка на случай, если полезная нагрузка - ложное значение
    }
  },
  // "builder callback API"
  extraReducers: (builder) => {
    builder.addCase(incrementBy, (state, action) => {
      return state + action.payload;
    });
    builder.addCase(decrementBy, (state, action) => {
      return state - action.payload;
    });
  }
});

const user = createSlice({
  name: "user",
  initialState: { name: "", age: 20 },
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload; // состояние можно мутировать как угодно (спасибо `immer`)
    }
  },
  // "map object API"
  extraReducers: {
    [counter.actions.increment]: (state, action) => {
      state.age += 1;
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counter.reducer,
    user: user.reducer
  }
});

const { increment, decrement, multiply } = counter.actions;
const { setUserName } = user.actions;

store.dispatch(increment());
// -> { counter: 1, user: {name : '', age: 21} }
store.dispatch(increment());
// -> { counter: 2, user: {name: '', age: 22} }
store.dispatch(multiply(3));
// -> { counter: 6, user: {name: '', age: 22} }
store.dispatch(multiply());
// -> { counter: 12, user: {name: '', age: 22} }
console.log(`${decrement}`);
// -> "counter/decrement"
store.dispatch(setUserName("John"));
