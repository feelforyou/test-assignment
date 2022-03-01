import React from 'react';
import { useField } from '../../FormLib.hooks';

export const FormLibInput = ({ name, ...props }) => {
  const [{ value, onChange, onBlur }] = useField(name);

  const onChangeInput = event => onChange(event.target.value);

  return <input name={name} value={value} onChange={onChangeInput} onBlur={onBlur} {...props} />;
};
