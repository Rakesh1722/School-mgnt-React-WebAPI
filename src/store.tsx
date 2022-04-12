import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Reducer } from "./redux/reducer/Reducer";

const reducer = combineReducers({
  Login: Reducer
});

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof reducer>

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import { Reducer } from "./redux/reducer/Reducer";

// const reducer = combineReducers({
//     Todo: Reducer,
// });

// const initialState = {};

// const middleware = [thunk];

// export const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
