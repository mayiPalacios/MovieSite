"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";
import { createStore, compose } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";
import Reducers from "../useRedux";

export const store = configureStore({
  reducer: {
    reducers: Reducers,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type dispatch = typeof store.dispatch;
