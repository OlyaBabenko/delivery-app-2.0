const validation = () => {
   return { isEmail, isPassword, isConfirmPassword, isName };
};

const emailRegex =
   /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const isEmail = (email) => {
   if (email === '') return ERRORS.REQUIRED;
   if (!emailRegex.test(email)) return ERRORS.INVALID_EMAIL;

   return null;
};

const isPassword = (password) => {
   if (password === '') return ERRORS.REQUIRED;
   if (password.length < 8) return ERRORS.MIN_LENGTH_PASSWORD;

   return null;
};
const isConfirmPassword = (firstPass, secondPass) => {
   if (secondPass === '') return ERRORS.REQUIRED;
   if (firstPass !== secondPass) return ERRORS.NOT_THE_SAME_PASSWORD;

   return null;
};

const isName = (name) => {
   if (name === '') return ERRORS.REQUIRED;

   return null;
};
const ERRORS = {
   REQUIRED: 'Field is required',
   INVALID_EMAIL: 'Email is invalid',
   NOT_THE_SAME_PASSWORD: 'Password is wrong',
   MIN_LENGTH_PASSWORD: 'Must be of minimum 8 characters',
};

export default validation;
