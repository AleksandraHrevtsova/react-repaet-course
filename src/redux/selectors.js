import { createSelector } from "@reduxjs/toolkit";

export const searchValueSelector = (state) => state.searchValue;
export const pageValueSelector = (state) => state.page;
export const getImagesSelector = (state) => state.images;

export const getSearchValue = createSelector([], () => {})