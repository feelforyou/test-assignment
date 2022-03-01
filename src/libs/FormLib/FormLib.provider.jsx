import React from 'react';
import { useFormLib } from './FormLib.hooks';
import { FormLibProvider } from './FormLib.context';

export const FormLib = ({ children, ...props }) => {
  const formProps = useFormLib(props);

  const isFunction = typeof children === 'function';

  return (
    <FormLibProvider value={formProps}>
      {isFunction ? children(formProps) : children}
    </FormLibProvider>
  );
};
