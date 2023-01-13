import React from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
const DayInfo = ({ day }) => {
  let { datetime, tempmax, tempmin } = day;
  console.log(datetime);

  let [dayOfWeak, m, d] = new Date(datetime).toString().split(" ");
  return (
    <div className="day-info">
      <h2>
        {dayOfWeak} {d} {m}
      </h2>
      <div className="icon">
        <BsFillCloudSunFill />
      </div>
      <div className="temp">
        {tempmax}°/{tempmin}°
      </div>
    </div>
  );
};

export default DayInfo;
