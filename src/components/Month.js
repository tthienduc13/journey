import React from "react";
import Day from "./Day";

function Month({ month }) {
  return (
    <>
      <div className="flex flex-row justify-center w-full">
        <div className="grid grid-cols-7 grid-rows-5  w-full">
          {month.map((row, i) => (
            <React.Fragment key={i}>
              {row.map((day, index) => (
                <Day day={day} key={index} rowIndex={i}></Day>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Month;
