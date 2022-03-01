import { useState } from 'react';
import { HttpStatusE, useDataFetch } from '../../../hooks/useDataFetch';

// Mock data can be changed, but model will be the same as described in README file
const MOCK_API_ERRORS = {
  generalErrors: [{ message: 'Please, enter correct values' }, { message: 'Too many requests!' }],
  firstName: [{ message: 'Enter correct first name!' }, { message: 'Alphanumeric string' }],
  lastName: [{ message: 'Enter correct last name!' }, { message: 'Alphanumeric string' }],
};

export const useUserForm = submitPromise => {
  const [apiValidationErrors, setApiValidationErrors] = useState(null);

  const [registerUserRes, registerUser] = useDataFetch({
    isLazy: true,
    fetchHandler: submitPromise,
    onSuccess: ({ status, ok, data }) => {
      if (ok) {
        setApiValidationErrors(null);
      }

      if (status === HttpStatusE.BAD_REQUEST) {
        setApiValidationErrors(data);
      }
    },
    onError: () => {
      setApiValidationErrors(MOCK_API_ERRORS);
    },
  });

  return {
    apiValidationErrors,
    onSubmit: registerUser,
    isLoading: registerUserRes.isLoading,
    responseStatus: registerUserRes.fullResponse?.status,
  };
};
