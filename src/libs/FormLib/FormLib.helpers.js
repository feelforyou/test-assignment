export const parseFormApiErrors = (initialValues, apiErrors) => {
  const formErrors = { generalErrors: null, fieldErrors: null };

  if (!apiErrors || !initialValues) {
    return formErrors;
  }

  // TODO implement parser for Api errors

  return formErrors;
};

export const checkFormDirty = (initialValues, currentValues) => {
  try {
    return JSON.stringify(currentValues) === JSON.stringify(initialValues);
  } catch (e) {
    return true;
  }
};
