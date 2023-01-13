import React, { useEffect, useState } from "react";
import "./styles/style.scss";
import { createClient } from "pexels";
import Infos from "./Infos";
const client = createClient(
  "563492ad6f91700001000001aec126ba9bb240e9823bfada8c3f89ee"
);

/* 
api:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/casablanca?unitGroup=uk&key=VJ3DZUDUFNBGMJT5A8CCQNU3B&contentType=json
*/

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [valid, setValid] = useState(false);
  const [data, setData] = useState(null);
  const [bgImage, setBgImage] = useState(
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  );
  let [dayOfWeak, month, day] = new Date().toString().split(" ");

  // console.log(today);

  useEffect(() => {
    if (valid) {
      const query = location;

      client.photos.search({ query, per_page: 10 }).then((res) => {
        let random = Math.floor(Math.random() * res.photos.length);
        // console.log(random);
        let photo = res.photos[random];

        setBgImage(photo.src.original);
      });
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=VJ3DZUDUFNBGMJT5A8CCQNU3B&contentType=json`
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
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
    }
  }

  return (
    <div className="container">
      <img src={bgImage} alt="Backgroud" className="bg-image" />
      <div className="bg-overlay"></div>
      <div className="content">
        <div className="form">
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
        </div>
        {data ? (
          <div>
            <div className="header">
              <div className="date">
                <h3 className="month">{month}</h3>
                <span className="dash"></span>
                <h2 className="day"> {day} </h2>
              </div>

              <div className="title">
                <div className="temp">{data.currentConditions.temp}°</div>
                <div className="location">{data.address}</div>
              </div>
            </div>
            <Infos days={data.days} conditions={data.currentConditions} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
