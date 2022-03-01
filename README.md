## AS IS

An application based on `create-react-app` which consists of one page. The page contains a form with various fields. The following fields: `text`, `email`, `select`, `number` are required. The form and other components are already created. The form can send pre filled data to the `fake server` by clicking on the `Submit` button. (Server is fake and always return an error). Task must be implemented in pure react, without using libraries such as `formik`.
You don't need to create a form, just try to understand the project structure and make a solution for task which is described below using methods and hooks which are already implemented.

## TO DO

According to the existing project template with all methods, hooks, components etc., write a form validator. Front-end validations should work before sending the data to the fake server. In case of a validation error(s), sending data should be blocked, and the corresponding messages should be displayed under the corresponding field in the form.
If front-end validation will be passed, `useUserForm` hook will always set a mocked API errors and it should also be displayed under the corresponding field in the form. (in this way we emulate server errors).

## Technical requirements

### Basic requirements

1. It is forbidden to remove any existing files. However, it is allowed to create new files inside the `src` directory.
2. The project is configured with `prettier` and` eslint`. The code must pass all eslint checks and must be formatted according to the settings in `.perttierrc`. Solutions that do not meet this requirement will be eliminated automatically, and their performance will not be checked. It is also forbidden to use the `eslint-disable- *` directives.
3. The compiled version of the app will be checked, so the candidate needs to make sure that the build works (`npm run build`,` npm start`).
4. Dev mode is started by the command `npm run dev`.
5. It is forbidden to use any third-party libraries. All code should be written in "clean" react. For requests to the "server", `fetch` will be used.
6. Ignore an error in devtools when POST method is called. (there is no a real server)
7. For better understanding, how form is working and what should you do, the most parts of work should be done in places with `// TODO .....` comments

### Task Requirements

1. All inputs in the form have a "name". The name is used to manipulate the `value` within the input. Also, the name must be used to map errors to the specific input in which the error occurred. Errors should be displayed under the input in the container
   ```html
   <div className="error_container">...</div>
   ```
2. Each error should be displayed as
   ```html
   <span className="error_message"> Some error text </span>
   ```
3. There can be more than one error for one input.
4. If the front-end validation fails, the submit button must be disabled via the disabled property.
5. After successfully submitting the request, the form should be completely cleared. After clearing the form, no errors should be displayed.
6. The set of rules for validation is stored in the file `/ src / validations / formValidation.js`. In a merge request, this file should not be changed, however, when checking the task, the reviewer can change the file, creating another set of rules to check the correctness of the form in general.

### Formats of the response from the "fake server"

1. Api errors will be set in `useUserForm` hook in the following format:

```javascript
{
  generalError ?: [{message: String}],
  [fieldName: String] ?: [{ message: String }]
}
```

### Front-end validation rules

Validation rules can be displayed in 2 ways - by pressing the submit button and by blur. The property `validateOn` is responsible for this, which can be either` blur` or `submit`, respectively.

Possible validation rules (defined by the `rules` field):

1.`required`. The field must contain something. 2. `email`. An email must be entered in the field (format `a @ b` where` a` and `b` can be any digital-alphabetic characters and` .`) any length. 3. `minLength` /` maxLength` limit on the minimum / maximum number of characters in the field. Within the framework of this task, if the input has both of these rules, `minLength` will always be strictly less than` maxLength`. The rule applies only to inputs of the type `text` and is guaranteed not to be checked on inputs of the other types 4. `min` /` max` The rule applies only to inputs of the type `number` and is guaranteed not to be checked on inputs of other types. Determines the minimum and maximum value in this input. Within the framework of the task, if the input has both rules at once, then `min` will always be strictly less than` max`. 5. In case of an error, the message from the `message` field should be displayed

An example of a validation rule:

```javascript
export const fromValidation = [
  {
    inputName: 'firstName',
    rules: [
      { type: 'required', message: 'the field is required' },
      { type: 'minLength', value: 3, message: 'to few symbols' },
    ],
    validateOn: 'submit',
  },
  {
    inputName: 'email',
    rules: [
      { type: 'email', message: 'incorrect format' },
      { type: 'required', message: 'required' },
    ],
    validateOn: 'submit',
  },
  {
    inputName: 'age',
    rules: [{ type: 'min', value: 18, message: 'to young' }],
    validateOn: 'blur',
  },
];
```

There may be a situation when there are no validation rules for one or several inputs in the form. Then for such inputs there will be no object in the `formValidation` array.
