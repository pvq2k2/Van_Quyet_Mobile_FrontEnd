export const cathError = (error) => {
  const { response } = error;
  if (response?.data?.Detail) return response?.data?.Detail;
  else if (response?.data?.errors) {
    const getError = response?.data?.errors;
    for (var key in getError) {
      if (getError.hasOwnProperty(key) && Array.isArray(getError[key])) {
        var errorMessage = getError[key][0];
        return errorMessage;
      }
    }
  }
  return error.message || error;
};

export const sliceName = (string, length) => {
  return string.slice(0, length) + "...";
};
