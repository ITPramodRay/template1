export const SignUpValidation = (signUpData) => {
  error = {};
  if (signUpData.firstName == "") {
    error["firstName"] = "Please fill firstname";
  }
};
