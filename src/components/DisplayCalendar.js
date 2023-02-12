import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import Month from "./Month";
import MonthHeader from "./MonthHeader";
import { getMonth } from "../util";
function DisplayCalendar({ functionGetMonth }) {
  const [currentMonth, setCurrentMonth] = useState(functionGetMonth());
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <div className="w-full">
        <div className="w-full sm:px-[120px] flex flex-col mb-20">
          <MonthHeader></MonthHeader>
          <div className="mt-20 w-full flex flex-col justify-center">
            <div className="w-full flex flex-row justify-between sm:px-20">
              <Month month={currentMonth}></Month>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayCalendar;
