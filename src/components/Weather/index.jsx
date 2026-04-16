import React, { useEffect, useState } from "react";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import styles from "./Weather.module.css";

const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,sunrise,rain_sum";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [tempratureUnit, setTemperatureUnit] = useState("celsius");
  const [windSpeedUnit, setWindSpeedUnit] = useState("kmh");

  const changeTemperatureUnit = () => {
    if (tempratureUnit === "celsius") {
      setTemperatureUnit("fahrenheit");
    } else {
      setTemperatureUnit("celsius");
    }
  };

  const changeWindSpeedUnit = () => {
    if (windSpeedUnit === "kmh") {
      setWindSpeedUnit("ms");
    } else {
      setWindSpeedUnit("kmh");
    }
  };

  useEffect(() => {
    fetch(
      `${WEATHER_API}&temperature_unit=${tempratureUnit}&wind_speed_unit=${windSpeedUnit}`,
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((e) => console.log("e", e));
  }, [tempratureUnit, windSpeedUnit]);

  return (
    <>
      <button onClick={changeTemperatureUnit}>{tempratureUnit}</button>
      <button onClick={changeWindSpeedUnit}>{windSpeedUnit}</button>
      <table className={styles.containerWeather}>
        <caption className={styles.titleWeather}>weather</caption>
        <thead>
          <tr className={styles.listGroop}>
            {weather?.daily?.time.map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.bodyWeather}>
          <tr className={styles.listGroop}>
            {weather?.daily?.temperature_2m_max.map((tempmax, index) => (
              <td key={index}>
                {tempmax} {weather?.daily_units?.temperature_2m_max}
              </td>
            ))}
          </tr>
          <tr className={styles.listGroop}>
            {weather?.daily?.temperature_2m_min.map((tempmin, index) => (
              <td key={index}>
                {tempmin} {weather?.daily_units?.temperature_2m_min}
              </td>
            ))}
          </tr>
          <tr className={styles.listGroop}>
            {weather?.daily?.wind_speed_10m_max.map((windspeed, index) => (
              <td key={index}>
                {windspeed}
                {weather?.daily_units?.wind_speed_10m_max}
              </td>
            ))}
          </tr>
          <tr className={styles.listGroop}>
            {weather?.daily?.wind_speed_10m_max.map((windspeed, index) => (
              <td key={index}>
                {windspeed < 20 ? <FaArrowTrendDown /> : ""}
                {weather?.daily_units?.wind_speed_10m_max}
              </td>
            ))}
          </tr>
          <tr className={styles.listGroop}>
            {weather?.daily?.wind_gusts_10m_max.map((windgusts, index) => (
              <td key={index}>
                {windgusts}
                {weather?.daily_units?.wind_gusts_10m_max}
              </td>
            ))}
          </tr>
          <tr className={styles.listGroop}>
            {weather?.daily?.wind_gusts_10m_max.map((windgusts, index) => (
              <td key={index}>
                {windgusts > 20 ? <FaArrowTrendUp /> : ""}
                {weather?.daily_units?.wind_gusts_10m_max}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Weather;
