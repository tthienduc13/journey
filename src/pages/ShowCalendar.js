import React from "react";
import { Link } from "react-router-dom";
import DisplayCalendar from "../components/DisplayCalendar";
import { getMonth } from "../util";
function ShowCalendar() {
  return (
    <>
      <div className="h-full w-full">
        <div className="sm:px-[120px] sm:flex-row h-[150px] w-full flex  flex-col justify-between items-center ">
          <div className="sm:p-0 p-6 ">
            <img src={require("../assets/Logo.png")}></img>
          </div>
          <div className="flex flex-row gap-3">
            <Link to={"/register"}>
              <button className="hidden  sm:block font-bold text-2xl px-10 py-4 bg-[#EF5B72] text-white tracking-widest ">
                Try journey, It's free.
              </button>
            </Link>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col sm:my-32 ">
          <div className="sm:w-2/5 w-full">
            <img src={require("../assets/note-img.png")} alt=""></img>
          </div>
          <div className=" w-full sm:w-2/5 sm:px-0 mt-8 sm:mt-0 px-4  flex flex-col justify-center sm:ml-[100px]">
            <h2 className="sm:text-[70px] text-5xl font-bold  ">My Notes</h2>
            <p className="sm:text-[48px] text-3xl font-medium py-4 sm:py-6">
              As soon as the dream fades away, it disappears among the stars,
              write without losing.
            </p>
          </div>
        </div>
        <div className="px-4 sm:px-0">
          <DisplayCalendar
            functionGetMonth={() => getMonth()}
          ></DisplayCalendar>
        </div>
      </div>
    </>
  );
}

export default ShowCalendar;
