import React from "react";
import { useNavigate } from "react-router";
function Day({ day, index, rowIndex }) {
  const navigate = useNavigate();
  const handleTakeNote = () => {
    navigate("/take-note");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {rowIndex === 0 && (
          <p className="sm:text-[48px] text-3xl font-semibold">
            {day.format("dd").toUpperCase()}
          </p>
        )}
        {/* border-[#AAD13A] */}
        <button
          onClick={handleTakeNote}
          className=" flex items-center p-4 w-6 h-6 justify-center bg-white tex-black border-8 sm:w-10 sm:h-10  rounded-full font-bold text-lg  sm:text-xl"
        >
          {day.format("DD")}
        </button>
      </div>
    </>
  );
}

export default Day;
