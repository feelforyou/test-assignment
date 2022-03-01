import React from 'react';
import { useField } from '../../FormLib.hooks';

export const FormLibSelect = ({ name, options, ...props }) => {
  const [{ value, onChange, onBlur }] = useField(name);

  const onChangeSelect = event => onChange(event.target.value);

  return (
    <select name={name} value={value} onChange={onChangeSelect} onBlur={onBlur} {...props}>
      {options.map(option => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
