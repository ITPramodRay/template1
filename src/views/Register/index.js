import React, { useState } from "react";

import Signupfrm from "./Signup/Signup";
import VerifyOtp from "./VerifyOtp/VerifyOtp";
import SetPassword from "./SetPassword/SetPassword";
import Loading from "./Loading";
import Otprightimg from "../../assets/images/Otpright.svg";
import { Link } from "react-router-dom";
import axios from "axios"

const SignUp = () => {
  
  const [error,setError] = useState('')
  const [viewComponent, setViewComponent] = useState("signupForm");
  const [registerUserData, setRegisterUserData] = useState({
    masterEmployerId:'587baca6-9246-4551-b1e4-c6f46e42e613',
    temporaryIndividualId:''
  })
  
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    mobEmail: "",
    age: "",
    income: "",
  });

  const [registerUserError, setRegisterUserError] = useState({});
  const [Otp, setOtp] = useState("");


  const registerUser = () => {
    let data = {
      masterEmployerId: registerUserData.masterEmployerId,
      jsonArrayObj:{
        individual_professional_email: registerForm.mobEmail,
        otp: Otp,
        individual_first_name: registerForm.firstName,
        individual_last_name: registerForm.lastName,
      }
   }
    axios.post("https://api-uat.life99.in/api-mdm/individual/onBoardEmployees",data)
    .then(res=>{
      console.log(res.data)
      setViewComponent("setPassword");
    })
    .catch(err=>console.log(err.response))
  }

  const verifyOtp = () => {
    console.log(Otp)

   let data = {
      otp: Otp,
      temporaryIndividualId: registerUserData.temporaryIndividualId,
      isReferral: false
   }
    axios.post("https://api-uat.life99.in/api-mdm/auth/validateotp-setpassword",data)
    .then(res=>{
      console.log(res.data)
      setError("")
      registerUser();
    })
    .catch(err=>{
      setError(err.response.data.message)
      console.log(err.response.data)
    })
  };

  const setPassword = (password, confirmPassword) => {
    alert(password + " " + confirmPassword);
    setViewComponent("loading");
  };
  
  const handleSetRegister = (field, value) => {
    let tempRegisterUser = { ...registerForm };
    tempRegisterUser[field] = value;
    setRegisterForm(tempRegisterUser);
  };

  const handleRegistration = () => {
    console.log(registerForm,"this is the data")
    let data= {
      email:registerForm.mobEmail,
      mobile:new Date().getTime(),
      isReferral: false
    }
    axios.post("https://api-uat.life99.in/api-mdm/auth/verify-on-board-user-v2",data)
    .then(res=>{
      console.log(res.data)
      setRegisterUserData({...registerUserData,temporaryIndividualId:res.data.userData.temporary_individual_id})
      setError("")
      setViewComponent("verifyOtp");
    })
    .catch(err=>{
      console.log(err.response)
      setError(err.response.data.message.split(":")[1])
    })
    // setViewComponent("verifyOtp");
  }

  return (
    <>
      {viewComponent === "loading" && <Loading />}
      {viewComponent !== "loading" && (
        <section className="signupmain">
          <div className="signleft">
            {viewComponent === "signupForm" && (
              <Signupfrm handleSetRegister={handleSetRegister} err={error} registerUser={handleRegistration} />
            )}
            {viewComponent === "verifyOtp" && (
              <VerifyOtp verifyOtp={verifyOtp} err={error} otp={Otp} setOtp={setOtp} />
            )}
            {viewComponent === "setPassword" && (
              <SetPassword setPassword={setPassword} />
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
