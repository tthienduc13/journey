import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="h-full w-full">
        <div className="sm:px-[120px] sm:flex-row h-[150px] w-full flex  flex-col justify-between items-center">
          <div className="sm:p-0 p-6 ">
            <img src={require("../assets/Logo.png")}></img>
          </div>
          <div className="flex flex-row gap-3">
            <Link to="/login">
              <button className="text-black text-2xl border-[1px] border-black py-[5px] px-[46px] font-semibold hover:bg-[#F2A626] ">
                Log in
              </button>
            </Link>
            <Link to="/register">
              <button className="text-white bg-black text-2xl border-[1px] border-black py-[5px] px-[46px] font-semibold hover:opacity-70 ">
                Sign up
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row mt-20 mb-6 sm:my-32 ">
          <div className="sm:w-3/5 sm:px-[120px] sm:items-start w-full p-4 flex flex-col items-center  ">
            <h2 className="sm:text-[70px] text-5xl font-bold  ">
              Your daily journey is coming to digital paper now.
            </h2>
            <p className="sm:text-[48px] text-3xl font-medium py-6">
              Write whatever you lived and what you thought.
            </p>
            <Link to={"/register"}>
              <button className="font-bold text-2xl px-8 py-4 bg-black text-white tracking-widest ">
                Try journey, It's free.
              </button>
            </Link>
          </div>
          <div className="sm:w-2/5 sm:mt-0 mt-2 w-full flex flex-row">
            <img className="w-fit" src={require("../assets/banner1.png")}></img>
          </div>
        </div>
        <div className="sm:px-[120px] sm:py-[97px] sm:flex-row sm:mb-32 w-full bg-[#FFD48F] bg-opacity-60  p-4 flex flex-col items-center mb-20 ">
          <div className="sm:w-2/5 w-full flex justify-center ">
            <img src={require("../assets/banner2.png")}></img>
          </div>
          <div className="sm:w-3/5 sm:mt-0 sm:text-left w-full mt-4 text-center">
            <h2 className="text-5xl sm:text-[70px] font-bold py-6  ">
              Write without losing
            </h2>
            <p className="sm:text-[48px] text-3xl font-medium">
              As soon as the dream fades away, it disappears among the stars,
              write without losing
            </p>
          </div>
        </div>
        <div className="sm:mb-32 sm:flex-row w-full flex flex-col items-center mb-20 ">
          <div className="sm:w-1/2 sm:px-[120px] w-full px-4  ">
            <h2 className="sm:text-[70px] text-5xl font-bold  ">
              Making a lot of room in the mind...
            </h2>
            <p className="sm:text-[48px] sm:mb-0 sm:p-0 text-3xl font-medium mb-6  py-6  ">
              Write whatever you lived and what you thought.
            </p>
          </div>
          <div className="sm:w-1/2 w-full flex flex-row-reverse">
            <img src={require("../assets/banner3.png")}></img>
          </div>
        </div>
        <div className="sm:px-[120px] sm:py-20 w-full flex flex-row bg-[#4BF226] bg-opacity-60  p-4 items-center">
          <div className="sm:block w-1/2 hidden">
            <img src={require("../assets/footer-img.png")}></img>
          </div>
          <div className="sm:w-1/2 sm:items-start w-full flex flex-col items-center">
            <h2 className="sm:text-[70px] text-5xl font-bold ">
              Your daily journey is coming to digital paper now.
            </h2>
            <p className="text-3xl font-medium py-6">
              Write whatever you lived and what you thought.
            </p>
            <Link to={"/register"}>
              <button className="font-bold text-2xl px-8 py-4 bg-[#EF5B72] text-black tracking-widest ">
                Try journey, It's free.
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
