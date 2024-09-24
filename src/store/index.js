import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slice/posts/slice";

const store = configureStore({
  reducer: {
    websiteFormInfo: formSlice,
  },
  devTools: true,
});

export default store;
