import React, { useEffect, useState } from "react";
import "./styles/style.scss";

/* 
api:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/casablanca?unitGroup=uk&key=VJ3DZUDUFNBGMJT5A8CCQNU3B&contentType=json
*/

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [valid, setValid] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (valid) {
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=VJ3DZUDUFNBGMJT5A8CCQNU3B&contentType=json`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          setLocation("");
        });
      setValid(false);
    }

    // return () => {
    //   console.log("clearing");
    // };
  }, [valid]);

  function handleSubmit(e) {
    e.preventDefault();
    if (location.trim() !== "") {
      setValid(true);
      //   setLocation("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>

      <h2>Meteo</h2>
      {data ? <div>temp:{data.currentConditions.temp}</div> : <></>}
    </div>
  );
};

export default WeatherApp;
