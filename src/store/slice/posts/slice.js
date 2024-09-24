import { createSlice } from "@reduxjs/toolkit";
import { websiteFormBuilder } from "./builder";

const INIT_STATE = {
  websiteForm: {
    email: "",
    fullName: "",
    type: "",
    data: {},
    loading: false,
  },
};

export const formSlice = createSlice({
  name: "websiteFormInfo",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    websiteFormBuilder(builder);
  },
});

export const selectWebsiteForm = (state) => state.websiteFormInfo.websiteForm;

export default formSlice.reducer;
