export const validateName = (name, value) => {
  const rule = value.length > 3;
  setValidation(rule, name);
};

export const validateEmail = (name, value) => {
  const rule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  setValidation(rule, name);
};

export const validatePhoneNumber = (name, value) => {
  const rule = !!value.match(/^\d{10}$/); // to do
  setValidation(rule, name);
};

export const validatePassword = (name, value) => {
  const rule = !!value.match(/^[A-Za-z]\w{7,14}$/);
  setValidation(rule, name);
};

export const validateConfirmedPassword = (name, value, password, errors) => {
  const rule = !errors?.password && value === password;
  setValidation(rule, name);
};

export const setValidation = (rule, name, setErrors) =>
  rule
    ? setErrors((prev) => ({ ...prev, [name]: false }))
    : setErrors((prev) => ({ ...prev, [name]: true }));
