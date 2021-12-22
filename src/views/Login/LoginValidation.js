const LoginValidation = (data, viewCompoment) => {
  let error = {};
  if (data.email === "") {
    error["email"] = "Please fill email";
  }
  if (viewCompoment === "LoginPage" && !data.otpBased && data.password === "") {
    error["password"] = "Please fill password";
  }
  //   if (data.otpBased && data.otp === "") {
  //     error["otp"] = "Please enter OTP";
  //   }
  return error;
};

export default LoginValidation;
