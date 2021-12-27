import React, { useState } from "react";

import Signupfrm from "./Signup/Signup";
import VerifyOtp from "./VerifyOtp/VerifyOtp";
import SetPassword from "./SetPassword/SetPassword";
import Loading from "./Loading";
import Otprightimg from "../../assets/images/Otpright.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../../utils/axios";
import { useLocation } from "react-router-dom";

const SignUp = () => {
  const location = useLocation();
  const [error, setError] = useState("");
  const [viewComponent, setViewComponent] = useState("signupForm");
  const [registerUserData, setRegisterUserData] = useState({
    masterEmployerId: "587baca6-9246-4551-b1e4-c6f46e42e613",
    temporaryIndividualId: "",
    individual_id: "",
    token: "",
  });

  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    mobEmail: "",
    age: "",
    income: "",
    mobile: "",
  });

  const [registerUserError, setRegisterUserError] = useState({});
  const [Otp, setOtp] = useState("");

  let baseUrl = "https://api-uat.life99.in/";

  console.log(process.env.REACT_APP_API_DOMAIN, "this is the api domain");

  // This function will post users data to register api
  const registerUser = () => {
    let data = {
      masterEmployerId: registerUserData.masterEmployerId,
      jsonArrayObj: {
        individual_professional_email: registerForm.mobEmail,
        otp: Otp,
        individual_first_name: registerForm.firstName,
        individual_last_name: registerForm.lastName,
        individual_mobile_no: registerForm.mobile,
        individual_dob: "1988/11/11",
        master_gender_type: "Male",
        employment_joining_date: "2013/02/19",
        employment_basic_salary: 52499.88,
        other_salary: "",
        employment_id: "EMP1234",
        address_type: "Permanent",
        individual_address_details: "Please update your Address Details",
        pin_code: "",
        state_name: "",
        city_name: "",
        employment_designation: "Please update your Designation",
        employment_leave_balance: 0,
        SA_Fund: 0,
        NPS_Contribution: null,
        NPS_Corpus: 0,
        PF_Contribution: 12,
        PF_Corpus: 0,
        SA_Contribution: null,
        Gratuity_Contribution: null,
        Gratuity_Corpus: 0,
        employment_grade: "",
        master_login_type: "employee",
        referred_by: "",
      },
    };
    axios
      .post(
        "https://api-uat.life99.in/api-mdm/individual/onBoardEmployees",
        data
      )
      .then((res) => {
        console.log(res.data, "this is the data");
        setRegisterUserData({
          ...registerUserData,
          individual_id: res?.data?.data?.individual_id,
        });
        setViewComponent("setPassword");
      })
      .catch((err) => console.log(err.response));
  };

  // This function will post OTP data to verify OTP
  const verifyOtp = () => {
    console.log(Otp);

    let data = {
      otp: Otp,
      temporaryIndividualId: registerUserData.temporaryIndividualId,
      isReferral: false,
    };
    axios
      .post(
        "https://api-uat.life99.in/api-mdm/auth/validateotp-setpassword",
        data
      )
      .then((res) => {
        console.log(res.data);
        setError("");
        registerUser();
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log(err.response.data);
      });
  };

  const updateRegistration = () => {
    let data = {
      individual_id: registerUserData.individual_id,
    };
    axios
      .post(
        "https://api-uat.life99.in/api-mdm/auth/set-registration-source",
        data
      )
      .then((res) => {
        console
          .log(res, "this is the updateRegistration response")
          .catch((err) => {
            console.log(err.response, "this is the updateRegistration error");
          });
      });
  };

  // This function will set the user password
  const setPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      if (password.length <= 8) {
        setError("password should be 8 characters long");
      }
      setError("password and re-enter password must be same");
      return;
    }
    console.log(registerUserData.individual_id, "this is the individual id");
    let data = {
      password: confirmPassword,
      individual_id: registerUserData.individual_id,
      isAgree: true,
      communicationConsent: true,
      referred_by: "",
    };
    axios
      .post(
        "https://api-uat.life99.in/api-mdm/auth/validateotp-setpassword",
        data
      )
      .then((res) => {
        setRegisterUserData({
          ...registerUserData,
          token: res?.data?.token,
        });
        setError("");
        setViewComponent("loading");
      })
      .catch((err) => {
        setError(err?.response?.message);
        console.log(err.response);
      });
  };


  // on onChange event of register form inputs this function will change the field values of registerForm state
  const handleSetRegister = (field, value) => {
    let tempRegisterUser = { ...registerForm };
    tempRegisterUser[field] = value;
    setRegisterForm(tempRegisterUser);
  };

  // This function will send the OTP to given mobile number or email address
  const handleRegistration = () => {
    console.log(registerForm, "this is the data");
    let data = {
      email: registerForm.mobEmail,
      mobile: new Date().getTime(),
      isReferral: false,
    };
    axios
      .post(
        "https://api-uat.life99.in/api-mdm/auth/verify-on-board-user-v2",
        data
      )
      .then((res) => {
        console.log(res.data);
        setRegisterUserData({
          ...registerUserData,
          temporaryIndividualId: res?.data?.userData?.temporary_individual_id,
        });
        console.log(
          res.data?.message,
          " ",
          `Email id "${registerForm.mobEmail}" is already in use. Click "OK" to login.`,
          "this is the"
        );
        if (
          res.data?.message ===
          `Email id "${registerForm.mobEmail}" is already in use. Click "OK" to login.`
        ) {
          setError("Email id already exists");
          return;
        }
        setViewComponent("verifyOtp");
      })
      .catch((err) => {
        console.log(err, "this is error");
        setError(err.response.data.message.split(":")[1]);
      });
  };

  return (
    <>
      {viewComponent === "loading" && <Loading />}
      {viewComponent !== "loading" && (
        <section className="signupmain">
          <div className="signleft">
            {viewComponent === "signupForm" && (
              <Signupfrm
                handleSetRegister={handleSetRegister}
                err={error}
                registerUser={handleRegistration}
              />
            )}
            {viewComponent === "verifyOtp" && (
              <VerifyOtp
                verifyOtp={verifyOtp}
                err={error}
                otp={Otp}
                setOtp={setOtp}
              />
            )}
            {viewComponent === "setPassword" && (
              <SetPassword err={error} setPassword={setPassword} />
            )}
          </div>
          <div className="signright">
            <h3>
              Be smart with your money. Start <Link>planning</Link> today.
            </h3>
            <img className="img-fluid" src={Otprightimg} alt="" title="" />
          </div>
        </section>
      )}
    </>
  );
};

export default SignUp;
