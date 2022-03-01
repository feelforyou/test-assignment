import React from 'react';
import {
  Form,
  FormLib,
  ErrorLabel,
  FieldError,
  FormLibInput,
  FormLibSelect,
  FormLibCheckbox,
} from '../../libs/FormLib';
import { registerApiCreator } from '../../api/registration';
import { userFormRules } from '../../validation/formValidation';
import { useUserForm } from './hooks/useUserForm';

const EMPTY_FORM_VALUES = {
  age: '0',
  married: false,
  sex: 'male',
  email: '',
  website: '',
  city: '',
  country: '',
  lastName: '',
  firstName: '',
  catchPhrase: '',
};

// Be careful! Don't remove data-testid && UserForm props, it will be used for tests.

export const UserForm = ({
  isSubmitPermanentlyEnabled,
  initialValues = EMPTY_FORM_VALUES,
  submitPromise = registerApiCreator,
}) => {
  const { onSubmit, onReset, isLoading, apiValidationErrors, responseStatus } =
    useUserForm(submitPromise);

  return (
    <FormLib
      isValidInitial
      hasResetOnSubmit
      onReset={onReset}
      onSubmit={onSubmit}
      rules={userFormRules}
      isLoading={isLoading}
      initialValues={initialValues}
      apiErrors={apiValidationErrors}
    >
      {form => (
        <Form>
          {responseStatus && (
            <span data-testid="response-status" style={{ visibility: 'hidden' }}>
              {responseStatus}
            </span>
          )}

          {!form.isValid && <ErrorLabel errors={form.generalErrors} />}

          <br />
          <div>
            <FormLibInput
              data-testid="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <FieldError name="firstName" />
          </div>

          <br />
          <div>
            <FormLibInput
              data-testid="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
            <FieldError name="lastName" />
          </div>

          <br />
          <div>
            <FormLibInput data-testid="website" type="text" name="website" placeholder="Website" />
            <FieldError name="website" />
          </div>

          <br />
          <div>
            <FormLibSelect
              name="sex"
              data-testid="sex"
              placeholder="Sex"
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
              ]}
            />
          </div>

          <br />
          <div>
            <label>
              <FormLibCheckbox data-testid="married" id="married" name="married" />
              Married
            </label>
          </div>

          <br />
          <div>
            <FormLibInput data-testid="age" type="number" min={0} name="age" placeholder="Age" />
            <FieldError name="age" />
          </div>

          <br />
          <div>
            <FormLibInput data-testid="email" type="text" name="email" placeholder="Email" />
            <FieldError name="email" />
          </div>

          <br />
          <div>
            <FormLibInput data-testid="country" type="text" name="country" placeholder="Country" />
            <FieldError name="country" />
          </div>

          <br />
          <div>
            <FormLibInput data-testid="city" type="text" name="city" placeholder="City" />
            <FieldError name="city" />
          </div>

          <br />
          <div>
            <FormLibInput
              data-testid="catchPhrase"
              type="text"
              name="catchPhrase"
              placeholder="Catch Phrase"
            />
            <FieldError name="catchPhrase" />
          </div>

          <br />
          <div>
            <button
              type="submit"
              data-testid="submitBtn"
              disabled={!isSubmitPermanentlyEnabled && (!form.isValid || isLoading)}
            >
              Submit
            </button>

            <button data-testid="resetBtn" type="reset">
              Reset
            </button>
          </div>
        </Form>
      )}
    </FormLib>
  );
};
