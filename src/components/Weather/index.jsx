import React, { useEffect, useState } from "react";

const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,sunrise,rain_sum";

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(WEATHER_API)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((e) => console.log("e", e));
  }, []);

  return (
    <table>
      <caption>weather</caption>
      <thead>
        <tr>
          {weather?.daily?.time.map((t) => (
            <th key={t}>{t}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {weather?.daily?.temperature_2m_max.map((tempmax) => {
            <td key={index}>{tempmax}</td>;
          })}
        </tr>
        <tr>
          {weather?.daily?.temperature_2m_min.map((tempmin) => {
            <td key={index}>{tempmin}</td>;
          })}
        </tr>
        <tr>
          {weather?.daily?.sunrise.map((sun) => {
            <td key={index}>{sun}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
}

export default Weather;
