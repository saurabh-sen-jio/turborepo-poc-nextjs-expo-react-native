"use client";

import { Button } from "@repo/ui";
import { getWeatherData, isValidPincode } from '@repo/services'
import cloud_icon from "../Assets/cloud.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

import styles from "../styles/index.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Web() {
  const [pincode, setPincode] = useState<string | null>(null);
  const [humidity, setHumidity] = useState<string | null>(null);
  const [windSpeed, setWindSpeed] = useState<string | null>(null);
  const [temperature, setTemperature] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const api_key = '7p+vGLV43QCM7oF2uVZb/Q==5vMs2TlvZVBUnaIa';
  let url = `https://api.api-ninjas.com/v1/weather?city=${pincode}`;
  const handleSearch = async () => {
    setIsLoading(true);
    if (!isValidPincode(pincode)) {
      alert('Enter a valid pincode');
      setIsLoading(false)
      return;
    }
    let res = await getWeatherData(url, api_key);
    let data = await res.json();
    setHumidity(data.humidity);
    setWindSpeed(data.wind_speed);
    setTemperature(data.temp);
    setIsLoading(false)
  }

  return (
    <div>
      <h1>Weather Application</h1>
      <div className={styles.container}>
        <input type="text" className="city-input" placeholder='Search' onChange={(e) => setPincode(e.target.value)} />
        <Button onClick={handleSearch} text="get weather" />
      </div>
      {
        temperature !== null
        && <div className={styles.container}>
          <div className="weather-image">
            <Image src={cloud_icon} alt="" />
          </div>
          <div className="weather-temp">{`${temperature}°c`}</div>
          <div className="data-container">
            <div className="element">
              <Image src={humidity_icon} alt="" className='icon' />
              <div className="data">
                <div className="humidity-precent">{`${humidity}%`}</div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="element">
              <Image src={wind_icon} alt="" className='icon' />
              <div className="data">
                <div className="humidity-precent">{`${windSpeed}km/h`}</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
      }

      {
        isLoading && <p>Loading weather data...</p>
      }

    </div>
  );
}

