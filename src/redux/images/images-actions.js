import { createAction } from "@reduxjs/toolkit";

export const searchImageRequest = createAction("images/searchImageRequest");
export const searchImageSuccess = createAction("images/searchImageSuccess");
export const searchImageError = createAction("images/searchImageError");

export const fetchImageRequest = createAction("images/fetchImageRequest");
export const fetchImageSuccess = createAction("images/fetchImageSuccess");
export const fetchImageError = createAction("images/fetchImageError");

export const setQuerySuccess = createAction("images/setQuerySuccess");

export const clearError = createAction("cards/clearError");
