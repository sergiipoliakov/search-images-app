import {
	searchImageRequest,
	searchImageSuccess,
	searchImageError,
	fetchImageRequest,
	fetchImageSuccess,
	fetchImageError,
	setQuerySuccess,
} from "./images-actions";

import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";

const client_id = "6FzO5xD6aLCqxG1BLnf4VihxKD2N2XKQpiKczzgwiUI";

const fetchAllImages = () => async (dispatch) => {
	dispatch(fetchImageRequest());
	try {
		const data = await axios.get(`/search/photos?&client_id=${client_id}`);
		dispatch(fetchImageSuccess(data));
	} catch (error) {
		dispatch(fetchImageError(error.message));
	}
};

const setQuery = (query) => (dispatch) => {
	console.log(
		"🚀 ~ file: images-operations.js ~ line 28 ~ setQuery ~ query",
		query
	);

	dispatch(setQuerySuccess(query));
};

const searchImages = (query = "cat", page = 1) => async (dispatch) => {
	dispatch(searchImageRequest());
	try {
		const { data } = await axios.get(
			`/search/photos?per_page=8&page=${page}&query=${query}&client_id=${client_id}`
		);
		dispatch(searchImageSuccess(data.results));
	} catch (error) {
		dispatch(searchImageError(error));
	}
};

const operations = { fetchAllImages, searchImages, setQuery };

export default operations;
