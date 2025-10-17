import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputFormData, setInputFormData] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setInputFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    // console.log(inputFormData);
  };

  const handleSubmitInputFormData = () => {
    console.log(inputFormData);
    setInputFormData({ username: "", password: "" });
  };

  return (
    <div className="flex justify-center flex-col items-center min-h-screen">
      <div
        className="max-w-[40rem] w-full  flex  flex-col bg-base-200 p-10
      items-center rounded-3xl
        "
      >
        <div>
          <h1 className="text-2xl mb-4  text-center">Login</h1>
        </div>
        <label class="input validator  w-full">
          <FaUser />
          <input
            type="text"
            placeholder="enter user name"
            required
            name="username"
            onChange={handleInputChange}
            value={inputFormData.username}
          />
        </label>
        <div class="validator-hint hidden">Enter valid Username</div> <br />{" "}
        <br />
        {/* <label class="input validator  w-full">
          <MdEmail />
          <input type="email" placeholder="enter email" required />
        </label>
        <div class="validator-hint hidden">Enter valid email address</div>
        <br />
        <br /> */}
        <label class="input validator w-full">
          <RiLockPasswordFill />
          <input
            type="password"
            placeholder="enter password"
            required
            name="password"
            onChange={handleInputChange}
            value={inputFormData.password}
          />
        </label>
        <div class="validator-hint hidden">Enter valid password</div>
        <br />
        <br />
        <button
          class="btn btn-primary w-full"
          type="submit"
          onClick={handleSubmitInputFormData}
        >
          Login
        </button>
        <p className="mt-4">
          Don't have an account ?
          <Link
            to="/signup"
            className="ml-2 underline underline-offset-2 text-blue-400 font-bold"
          >
            signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
