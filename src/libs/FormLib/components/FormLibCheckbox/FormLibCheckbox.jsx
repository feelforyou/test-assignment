import React from 'react';
import { useField } from '../../FormLib.hooks';

export const FormLibCheckbox = ({ name, ...props }) => {
  const [{ value, onChange, onBlur }] = useField(name);

  const onChangeInput = event => onChange(event.target.checked);

  return (
    <input
      {...props}
      type="checkbox"
      name={name}
      checked={value}
      onBlur={onBlur}
      onChange={onChangeInput}
    />
  );
};
