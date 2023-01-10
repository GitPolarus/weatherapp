import React from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
const DayInfo = () => {
  return (
    <div className="day-info">
      <h2>Day</h2>
      <div className="icon">
        <BsFillCloudSunFill />
      </div>
      <div className="temp">57°/10°</div>
    </div>
  );
};

export default DayInfo;
