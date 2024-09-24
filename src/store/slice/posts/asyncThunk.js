import { createAsyncThunk } from "@reduxjs/toolkit";
import formService from "../../../api/services/FormServices";

export const websiteForm = createAsyncThunk(
  "websiteForm/post-form",
  async (requestData) => {
    return await formService.websiteForm(requestData);
  }
);
