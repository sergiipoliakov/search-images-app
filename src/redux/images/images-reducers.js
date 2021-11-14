import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
	searchImageRequest,
	searchImageSuccess,
	searchImageError,
	fetchImageError,
	fetchImageSuccess,
	fetchImageRequest,
	setQuerySuccess,
	clearError,
} from "./images-actions";

const searchImages = createReducer([], {
	[searchImageSuccess]: (_, { payload }) => payload,
});

const AllIMages = createReducer([], {
	[fetchImageSuccess]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
	[fetchImageError]: setError,
	[searchImageError]: setError,

	[clearError]: () => null,
});

const query = createReducer("", {
	[setQuerySuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
	[fetchImageRequest]: () => true,
	[fetchImageSuccess]: () => false,
	[fetchImageError]: () => false,

	[searchImageRequest]: () => true,
	[searchImageSuccess]: () => false,
	[searchImageError]: () => false,
});
export default combineReducers({
	AllIMages,
	searchImages,
	error,
	loading,
	query,
});
