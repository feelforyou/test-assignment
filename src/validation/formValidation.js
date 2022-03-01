export const userFormRules = [
  {
    inputName: 'firstName',
    rules: [
      { type: 'required', message: 'Field is required' },
      { type: 'minLength', value: 3, message: 'Enter few symbols' },
      { type: 'maxLength', value: 99, message: 'Max length is 99 symbols' },
    ],
    validateOn: 'blur',
  },
  {
    inputName: 'firstName',
    rules: [
      { type: 'required', message: '(Submit) Field is required' },
      { type: 'minLength', value: 3, message: '(Submit) Enter few symbols' },
      { type: 'maxLength', value: 99, message: '(Submit) Max length is 99 symbols' },
    ],
    validateOn: 'submit',
  },

  {
    inputName: 'lastName',
    rules: [
      { type: 'required', message: 'Field is required' },
      { type: 'minLength', value: 3, message: 'Enter few symbols' },
      { type: 'maxLength', value: 99, message: 'Max length is 99 symbols' },
    ],
    validateOn: 'blur',
  },
  {
    inputName: 'lastName',
    rules: [
      { type: 'required', message: '(Submit) Field is required' },
      { type: 'minLength', value: 3, message: '(Submit) Enter few symbols' },
      { type: 'maxLength', value: 99, message: '(Submit) Max length is 99 symbols' },
    ],
    validateOn: 'submit',
  },
  {
    inputName: 'website',
    rules: [
      { type: 'required', message: 'Field is required' },
      { type: 'minLength', value: 1, message: 'Enter at least 1 symbol' },
      { type: 'maxLength', value: 20, message: 'Max length is 20 symbols' },
    ],
    validateOn: 'blur',
  },
  {
    inputName: 'website',
    rules: [
      { type: 'required', message: '(Submit) Field is required' },
      { type: 'minLength', value: 1, message: '(Submit) Enter at least 1 symbol' },
      { type: 'maxLength', value: 20, message: '(Submit) Max length is 20 symbols' },
    ],
    validateOn: 'submit',
  },
  {
    inputName: 'age',
    rules: [
      { type: 'required', message: 'Field is required' },
      { type: 'min', value: 18, message: 'Too young!' },
      { type: 'max', value: 99, message: 'Oppps,sorry!' },
    ],
    validateOn: 'blur',
  },
  {
    inputName: 'age',
    rules: [
      { type: 'required', message: '(Submit) Field is required' },
      { type: 'min', value: 18, message: '(Submit) Too young!' },
      { type: 'max', value: 99, message: '(Submit) Oppps,sorry!' },
    ],
    validateOn: 'submit',
  },
  {
    inputName: 'email',
    rules: [
      { type: 'required', message: 'Field is required' },
      { type: 'email', message: 'Incorrect format' },
    ],
    validateOn: 'blur',
  },
  {
    inputName: 'email',
    rules: [
      { type: 'required', message: '(Submit) Field is required' },
      { type: 'email', message: '(Submit) Incorrect format' },
    ],
    validateOn: 'submit',
  },
  {
    inputName: 'country',
    rules: [
      { type: 'required', message: 'Field is required' },
      { type: 'minLength', value: 2, message: 'Enter at least 2 symbol' },
      { type: 'maxLength', value: 30, message: 'Max length is 30 symbols' },
    ],
    validateOn: 'blur',
  },
  {
    inputName: 'country',
    rules: [
      { type: 'required', message: '(Submit) Field is required' },
      { type: 'minLength', value: 2, message: 'Enter at least 2 symbol' },
      { type: 'maxLength', value: 30, message: 'Max length is 30 symbols' },
    ],
    validateOn: 'submit',
  },
  {
    inputName: 'city',
    rules: [
      { type: 'required', message: 'Field is required' },
      { type: 'minLength', value: 2, message: 'Enter at least 2 symbol' },
      { type: 'maxLength', value: 30, message: 'Max length is 30 symbols' },
    ],
    validateOn: 'blur',
  },
  {
    inputName: 'city',
    rules: [
      { type: 'required', message: '(Submit) Field is required' },
      { type: 'minLength', value: 5, message: '(Submit) Enter at least 5 symbol' },
      { type: 'maxLength', value: 100, message: '(Submit) Max length is 100 symbols' },
    ],
    validateOn: 'submit',
  },
  {
    inputName: 'catchPhrase',
    rules: [
      { type: 'required', message: 'Field is required' },
      { type: 'minLength', value: 5, message: 'Enter at least 5 symbol' },
      { type: 'maxLength', value: 100, message: 'Max length is 100 symbols' },
    ],
    validateOn: 'blur',
  },
  {
    inputName: 'catchPhrase',
    rules: [
      { type: 'required', message: '(Submit) Field is required' },
      { type: 'minLength', value: 5, message: '(Submit) Enter at least 5 symbol' },
      { type: 'maxLength', value: 100, message: '(Submit) Max length is 100 symbols' },
    ],
    validateOn: 'submit',
  },
];
