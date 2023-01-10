import React from "react";
import ReactDOM from "react-dom/client";
import WeatherApp from "./components/WeatherApp";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);
