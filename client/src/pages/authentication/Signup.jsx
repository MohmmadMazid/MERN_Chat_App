import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUserThunk } from "../../slice/user/user.thunk";
import toast from "react-hot-toast";

const Signup = () => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const [signupFormData, setSignupFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });

  const handleInputChange = (e) => {
    setSignupFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitFormData = async () => {
    // console.log("signupFormData ", signupFormData);
    if (signupFormData.password !== signupFormData.confirmPassword) {
      return toast.error("password and confirmPassword do not match");
    }
    const response = await dispatch(registerUserThunk(signupFormData));
    // console.log("signup response", response?.payload?.success);
    if (response?.payload?.success) {
      nevigate("/");
    }

    setSignupFormData({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: null,
    });
  };
  return (
    <div className="flex justify-center flex-col items-center min-h-screen">
      <div
        className="max-w-[40rem] w-full  flex  flex-col bg-base-200 p-10
      items-center rounded-3xl
        "
      >
        <div>
          <h1 className="text-2xl mb-10  text-center">Signup</h1>
        </div>
        <label className="input validator  w-full mb-7">
          <FaUser />
          <input
            type="text"
            placeholder="enter full name"
            required
            name="fullName"
            onChange={handleInputChange}
            value={signupFormData.fullName}
          />
        </label>
        <div className="validator-hint hidden">Enter full name</div> <br />{" "}
        <label className="input validator  w-full">
          <FaUser />
          <input
            type="text"
            placeholder="enter user name"
            required
            name="username"
            onChange={handleInputChange}
            value={signupFormData.username}
          />
        </label>
        <div className="validator-hint hidden">Enter valid Username</div>
        {/* 
        <br />
        <label className="input validator  w-full">
          <MdEmail />
          <input type="email" placeholder="enter email" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div> */}
        <br />
        <br />
        <label className="input validator w-full">
          <RiLockPasswordFill />
          <input
            type="password"
            placeholder="enter password"
            required
            name="password"
            onChange={handleInputChange}
            value={signupFormData.password}
          />
        </label>
        <div className="validator-hint hidden">Enter valid password</div>
        <br />
        <br />
        <label className="input validator w-full">
          <RiLockPasswordFill />
          <input
            type="password"
            placeholder="enter confirm password"
            required
            name="confirmPassword"
            onChange={handleInputChange}
            value={signupFormData.confirmPassword}
          />
        </label>
        <div className="validator-hint hidden">
          Enter valid confirm password
        </div>
        <br />
        <br />
        <div className=" validator w-full flex items-center ">
          <label className="input validator w-full flex gap-2 items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              className="radio radio-primary"
              onChange={handleInputChange}
            />
            male
          </label>
          <label class="input validator w-full flex gap-2 items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              className="radio radio-primary"
              onChange={handleInputChange}
            />
            female
          </label>
        </div>
        <br />
        <br />
        <button
          className="btn btn-primary w-full"
          onClick={handleSubmitFormData}
        >
          Signup
        </button>
        <p className="mt-4">
          Already have an account ?
          <Link
            to="/login"
            className="ml-2 underline underline-offset-2 text-blue-400 font-bold"
          >
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
