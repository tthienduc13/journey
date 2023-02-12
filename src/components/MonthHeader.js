import React from "react";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
function MonthHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  return (
    <>
      <div className="w-full">
        <div className="w-full mb-[-60px] sm:mb-[70px]  flex flex-row sm: justify-center items-center sm:text-[70px] text-5xl ">
          <button
            className="sm:hidden text-2xl mr-4"
            onClick={() => handlePrevMonth()}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          <button
            className=" sm:hidden text-2xl ml-4"
            onClick={() => handleNextMonth()}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className="w-full sm:flex flex-row justify-between  hidden ">
          <button
            className="sm:text-[48px] text-xl font-semibold "
            onClick={() => setMonthIndex(0)}
          >
            Jan
          </button>
          <button
            className="sm:text-[48px] text-xl font-semibold"
            onClick={() => setMonthIndex(1)}
          >
            Feb
          </button>
          <button
            className="sm:text-[48px] text-xl font-semibold"
            onClick={() => setMonthIndex(2)}
          >
            Mar
          </button>
          <button
            className="sm:text-[48px] text-xl font-semibold"
            onClick={() => setMonthIndex(3)}
          >
            Apr
          </button>
          <button
            className="sm:text-[48px] text-xl font-semibold"
            onClick={() => setMonthIndex(4)}
          >
            May
          </button>
          <button
            className="sm:text-[48px] text-xl font-semibold "
            onClick={() => setMonthIndex(5)}
          >
            Jun
          </button>
          <button
            className="sm:text-[48px] text-xl font-semibold"
            onClick={() => setMonthIndex(6)}
          >
            Jul
          </button>
          <button
            className="sm:text-[48px] text-xl font-semibold"
            onClick={() => setMonthIndex(7)}
          >
            Jan
          </button>
          <button
            className="sm:text-[48px] text-xl font-semibold"
            onClick={() => setMonthIndex(8)}
          >
            Sep
          </button>
          <button
            className="sm:text-[48px] text-xl font-semibold"
            onClick={() => setMonthIndex(9)}
          >
            Oct
          </button>
          <button
            className="sm:text-[48px] text-xl font-semibold"
            onClick={() => setMonthIndex(10)}
          >
            Nov
          </button>
          <button
            className="sm:text-[48px] text-xl font-semibold"
            onClick={() => setMonthIndex(11)}
          >
            Dec
          </button>
        </div>
      </div>
    </>
  );
}

export default MonthHeader;
