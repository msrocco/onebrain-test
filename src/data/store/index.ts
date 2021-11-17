import { configureStore } from "@reduxjs/toolkit";
import { countersReducer } from "../../presentation/pages/Counters/state/CountersSlice";

export const store = configureStore({
  reducer: {
    counters: countersReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch