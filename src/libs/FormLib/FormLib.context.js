import { createContext, useContext } from 'react';

export const FormLibContext = createContext({
  apiErrors: null,
  initialErrors: {},
  initialValues: {},
  initialIsTouched: null,
  rules: [],
  values: {},
  errors: {},
  generalErrors: {},
  touched: {},
  isValid: false,
  isDirty: false,
  isTouched: false,
  isSubmitted: false,
  resetForm: () => undefined,
  submitForm: () => undefined,
  handleReset: () => undefined,
  handleSubmit: () => undefined,
  setFormDirty: () => undefined,
  setFieldValue: () => undefined,
  setFieldTouched: () => undefined,
  setFormSubmission: () => undefined,
  getFieldMeta: () => undefined,
  getFieldProps: () => undefined,
  getFieldHelpers: () => undefined,
});

const FormLibProvider = FormLibContext.Provider;

const useFormLibContext = () => useContext(FormLibContext);

export { FormLibProvider, useFormLibContext };
