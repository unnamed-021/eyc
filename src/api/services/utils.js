export const handleError = (err, defaultErrorMessage) => {
  let errorMessage;
  if (err.response && err.response.data) {
    errorMessage = err.response.data.message || defaultErrorMessage;
  } else {
    errorMessage = defaultErrorMessage;
  }
  return new Error(errorMessage);
};

export const throwErrorIfWrongStatus = (response, status) => {
  if (response.status !== status) {
    throw new Error("Invalid response status");
  }
};
