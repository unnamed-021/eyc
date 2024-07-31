export const handleError = (err, defaultErrorMessage) => {
  let errorMessage;
  if (err.response && err.response.data) {
    errorMessage = err.response.data.message || defaultErrorMessage;
  } else {
    errorMessage = defaultErrorMessage;
  }
  return new Error(errorMessage);
};
