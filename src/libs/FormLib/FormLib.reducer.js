import {
  ACTION_RESET_FORM,
  ACTION_SUBMIT_FORM,
  ACTION_SET_FORM_DIRTY,
  ACTION_SET_FIELD_VALUE,
  ACTION_SET_FIELD_TOUCHED,
  ACTION_SET_SUBMITTING_PROCESS,
} from './FormLib.actions';

export const initFormReducer = ({
  initialValues,
  initialErrors,
  initialTouched,
  isValidInitial = false,
}) => {
  const touched = {
    ...Object.keys(initialValues).reduce((acc, fieldName) => ({ ...acc, [fieldName]: false }), {}),
    ...(initialTouched || {}),
  };

  const errors = {
    ...Object.keys(initialValues).reduce((acc, fieldName) => ({ ...acc, [fieldName]: null }), {}),
    ...(initialErrors || {}),
  };

  const isTouched = Object.keys(initialValues).some(fieldName => touched[fieldName]);

  return {
    errors,
    touched,
    isTouched,
    isDirty: false,
    isValid: isValidInitial,
    isSubmittingInProcess: false,
    generalErrors: [],
    values: initialValues,
  };
};

export const formReducer = (formState, formAction) => {
  switch (formAction.type) {
    case ACTION_RESET_FORM: {
      return initFormReducer(formAction.payload);
    }

    case ACTION_SUBMIT_FORM: {
      const touched = Object.keys(formState.touched).reduce(
        (prev, curr) => ({ ...prev, [curr]: true }),
        {}
      );

      return { ...formState, isSubmitted: true, touched };
    }

    case ACTION_SET_SUBMITTING_PROCESS: {
      return { ...formState, isSubmittingInProcess: formAction.payload.isSubmittingInProcess };
    }

    case ACTION_SET_FORM_DIRTY: {
      return { ...formState, isDirty: formAction.payload.isDirty };
    }

    case ACTION_SET_FIELD_VALUE: {
      const values = {
        ...formState.values,
        [formAction.payload.fieldName]: formAction.payload.fieldValue,
      };

      return { ...formState, values };
    }

    case ACTION_SET_FIELD_TOUCHED: {
      const touched = {
        ...formState.touched,
        [formAction.payload.fieldName]: formAction.payload.fieldTouched,
      };

      return { ...formState, touched, isTouched: true };
    }

    default:
      return formState;
  }
};
