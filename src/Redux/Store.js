import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./GetNews";
export default configureStore({
    reducer: {
      [newsApi.reducerPath] : newsApi.reducer
    },
  });