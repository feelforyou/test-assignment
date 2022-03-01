import React from 'react';
import { useFormLibContext } from '../../FormLib.context';
import { ErrorLabel } from '../ErrorLabel/ErrorLabel';

export const FieldError = ({ name }) => {
  const { errors, touched } = useFormLibContext(name);

  const fieldErrors = errors[name];

  if (!touched || !fieldErrors?.length) {
    return null;
  }

  // Be careful! Don't remove name prop, it will be used for tests.
  return <ErrorLabel errors={fieldErrors} name={name} />;
};
