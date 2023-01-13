import React from "react";
import DayInfo from "./DayInfo";
import "./styles/style.scss";

const Infos = ({ days, conditions }) => {
  return (
    <div className="infos">
      <div className="current-details">
        <div className="description">{conditions.conditions}</div>
        <div className="wind">
          <strong>Wind</strong> {conditions.windspeed} km/h{" "}
        </div>
        <div className="humidity">
          <strong>Hum</strong> {conditions.humidity}%
        </div>
      </div>
      <div className="days-info">
        {days.map((day, key) => {
          return <DayInfo key={key} day={day} />;
        })}
      </div>
    </div>
  );
};

export default Infos;
