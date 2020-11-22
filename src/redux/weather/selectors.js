import { createSelector } from "@reduxjs/toolkit";

const rootSelector = (state) => state.weather;

export const weatherSelector = createSelector(
  rootSelector,
  (weather) => weather.data
);

export const isDataLoadingSelector = createSelector(
  rootSelector,
  (weather) => weather.isLoading
);
