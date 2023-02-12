import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="w-full flex justify-center flex-col">
        <div className="w-full px-[120px] py-12 flex flex-row items-center">
          <div className="flex-grow">
            <img src={require("../assets/Logo.png")}></img>
          </div>
          <Link to={"/register"}>
            <button className="hidden  sm:block font-bold text-2xl px-10 py-4 bg-[#EF5B72] text-white tracking-widest ">
              Try journey, It's free.
            </button>
          </Link>
        </div>
        <div className=" flex justify-center items-center flex-col w-full  ">
          <p className="sm:text-[70px] text-5xl font-medium  text-center  ">
            Write whatever you lived and what you thought.
          </p>
          <div className="min-w[960px] p-10">
            <div className="mb-[60px]">
              <input
                placeholder="Email "
                className="text-3xl w-full  border-b-[1px] border-black outline-none px-2 py-1   "
              ></input>
            </div>
            <div className="mb-[40px]">
              <input
                placeholder="Password "
                className="text-3xl w-full border-b-[1px] border-black outline-none px-2 py-1   "
              ></input>
            </div>
            <div className="flex flex-row items-center mb-[40px]">
              <input
                type="checkbox"
                className="accent-[#F2A626] w-6 h-6"
              ></input>
              <p className="ml-4 text-2xl tracking-widest text-opacity-60">
                In announcements and campaigns, I want to be notified via
                e-mail.
              </p>
            </div>
            <Link to={"/calendar"}>
              <button className="w-full bg-black text-white text-3xl py-4">
                Log In
              </button>
            </Link>
          </div>
          <div className="w-full justify-center flex flex-row text-3xl mb-[40px] ">
            <p>Forgot Password?</p>
          </div>
          <div className="w-full justify-center flex flex-row text-3xl mb-[40px] ">
            <p>Not Our Member?</p>
            <Link to={"/register"}>
              <button className="ml-4 font-semibold">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
