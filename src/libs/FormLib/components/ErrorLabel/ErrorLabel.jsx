import React from 'react';

// Be careful! Don't remove name & data-testid props, it will be used for tests.

export const ErrorLabel = ({ errors, name = 'global' }) => {
  if (!errors?.length) {
    return null;
  }

  return (
    <div className="error_container" data-testid={`${name}-error-container`}>
      {errors.map(({ message }) => (
        <span style={{ display: 'block' }} key={message} className="error_message">
          {message}
        </span>
      ))}
    </div>
  );
};
