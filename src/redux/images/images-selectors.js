const getAllSerchImages = (state) => state.searchImages;
const getQuery = (state) => state.query;
const getLoading = (state) => state.loading;

const selectors = { getAllSerchImages, getQuery, getLoading };

export default selectors;
