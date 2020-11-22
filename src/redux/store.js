import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import weather from "./weather";

import sagas from "redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: weather,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(sagas);

export default store;
