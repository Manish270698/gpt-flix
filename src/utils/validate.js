export const validateEmail = (email) => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!isEmailValid) return "invalid email";

  return null;
};

export const validatePassword = (password) => {
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isPasswordValid) return "invalid password";

  return null;
};

export const validateName = (name) => {
  const isNameValid =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      name
    );
  if (!isNameValid) return "invalid name";

  return null;
};
