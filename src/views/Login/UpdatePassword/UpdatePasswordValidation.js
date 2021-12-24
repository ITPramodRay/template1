const UpdatePasswordValidation = (data) => {
  console.log(data);
  let error = {};
  if (data.password === "") {
    error["password"] = "Please enter password";
  }
  if (data.confPassword === "") {
    error["confPassword"] = "Please re-enter password";
  }

  if (
    data.confPassword != "" &&
    data.password != "" &&
    data.password !== data.confPassword
  ) {
    error["matchError"] = "Both passoword not match";
  }
  console.log(error);
  return error;
};
export default UpdatePasswordValidation;
