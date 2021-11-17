import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../data/store';
import { ICounter } from './Counter.types';

const initialState = {
  counters: [] as ICounter[],
  selectedCounter: {} as ICounter,
};

export const countersSlice = createSlice({
  name: '@counters',
  initialState: initialState,
  reducers: {
    addCounter: state => {
      const counter = {
        id: Math.random().toString(20).substr(2, 10),
        index: state.counters.length + 1,
        counter: 0,
      };
      state.counters.push(counter);

      if (state.counters.length === 1) {
        state.selectedCounter = counter;
      }
    },
    deleteCounter: (state, action: PayloadAction<ICounter>) => {
      state.counters = state.counters.filter(
        counter => counter.id !== action.payload.id,
      );

      state.selectedCounter = state.counters[0];
    },
    selectCounter: (state, action: PayloadAction<ICounter>) => {
      state.selectedCounter = action.payload;
    },
    incrementCounter: (state, action: PayloadAction<ICounter>) => {
      const counterIndex = state.counters.findIndex(
        item => item.id === action.payload.id,
      );
      state.counters[counterIndex].counter++;
    },
    decrementCounter: (state, action: PayloadAction<ICounter>) => {
      const counterIndex = state.counters.findIndex(
        item => item.id === action.payload.id,
      );
      state.counters[counterIndex].counter--;
    },
    resetCounter: (state, action: PayloadAction<ICounter>) => {
      const counterIndex = state.counters.findIndex(
        item => item.id === action.payload.id,
      );
      state.counters[counterIndex].counter = 0;
    },
  },
});

export const {
  addCounter,
  deleteCounter,
  selectCounter,
  incrementCounter,
  decrementCounter,
  resetCounter,
} = countersSlice.actions;

export const selectCounters = (state: RootState) => state.counters;

export const countersReducer = countersSlice.reducer;
