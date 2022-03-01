import React from 'react';
import { useApiErrors } from '../../FormLib.hooks';
import { useFormLibContext } from '../../FormLib.context';

export const Form = ({ children, ...props }) => {
  const {
    apiErrors,
    initialValues,
    setAllErrors,
    setIsApiErrors,
    setGeneralErrors,
    handleReset,
    handleSubmit,
  } = useFormLibContext();

  useApiErrors(initialValues, apiErrors, setAllErrors, setGeneralErrors, setIsApiErrors);

  return (
    <form action="#" onSubmit={handleSubmit} onReset={handleReset} {...props}>
      {children}
    </form>
  );
};
