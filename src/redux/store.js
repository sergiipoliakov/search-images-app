import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./images/images-reducers";

const store = configureStore({ reducer: rootReducer });

export default store;
