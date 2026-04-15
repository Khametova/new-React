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
          {weather?.daily?.temperature_2m_max.map((tempmax, index) => (
            <td key={index}>{tempmax}</td>
          ))}
        </tr>
        <tr>
          {weather?.daily?.temperature_2m_min.map((tempmin, index) => (
            <td key={index}>{tempmin}</td>
          ))}
        </tr>
        <tr>
          {weather?.daily?.wind_speed_10m_max.map((windspeed, index) => (
            <td key={index}>{windspeed}</td>
          ))}
        </tr>
        <tr>
          {weather?.daily?.wind_gusts_10m_max.map((windgusts, index) => (
            <td key={index}>{windgusts}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Weather;
