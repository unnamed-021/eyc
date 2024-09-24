import { websiteForm } from "./asyncThunk";

export const websiteFormBuilder = (builder) => {
  builder.addCase(websiteForm.pending, (state, { meta }) => {
    state.websiteForm.loading = true;
  });

  builder.addCase(websiteForm.fulfilled, (state, { payload }) => {
    const { fullName, email, type, data } = payload;
    state.websiteForm.loading = false;
    state.websiteForm.fullName = fullName;
    state.websiteForm.email = email;
    state.websiteForm.type = type;
    state.websiteForm.data = data;
  });

  builder.addCase(websiteForm.rejected, (state) => {
    state.websiteForm.loading = false;
  });
};
