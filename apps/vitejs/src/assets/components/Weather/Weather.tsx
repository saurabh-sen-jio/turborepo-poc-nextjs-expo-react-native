import cloud_icon from "../../assets/images/cloud.png"
import humidity_icon from "../../assets/images/humidity.png"
import wind_icon from "../../assets/images/wind.png"

import { getData, isValidPincode } from "@repo/services";
import { useState } from "react";

const Weather = () => {

    const [pincode, setPincode] = useState<string | null>(null);
    const [humidity, setHumidity] = useState<string | null>(null);
    const [windSpeed, setWindSpeed] = useState<string | null>(null);
    const [temperature, setTemperature] = useState<string | null>(null);

    const [isLoading, setIsLoading] = useState(false);

    const api_key = '7p+vGLV43QCM7oF2uVZb/Q==5vMs2TlvZVBUnaIa';
    let url = `https://api.api-ninjas.com/v1/weather?city=${pincode}`;
    const handleSearch = async () => {
        setIsLoading(true);
        if (pincode !== null && !isValidPincode(pincode)) {
            alert('Enter a valid pincode');
            setIsLoading(false)
            return;
        }
        let res = await getData(url, api_key);
        let data = await res.json();
        setHumidity(data.humidity);
        setWindSpeed(data.wind_speed);
        setTemperature(data.temp);
        setIsLoading(false)
    }

    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="city-input" placeholder='Search' onChange={(e) => setPincode(e.target.value)} />
                <div className="search-icon" onClick={handleSearch}>
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" fill="#323232" />
                        <path d="M15 15L21 21" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#323232" strokeWidth="2" />
                    </svg>
                </div>
            </div>
            {
                temperature !== null
                && <>
                    <div className="weather-image">
                        <img src={cloud_icon} alt="" />
                    </div>
                    <div className="weather-temp">{`${temperature}°c`}</div>
                    <div className="weather-location">{pincode}</div>
                    <div className="data-container">
                        <div className="element">
                            <img src={humidity_icon} alt="" className='icon' />
                            <div className="data">
                                <div className="humidity-precent">{`${humidity}%`}</div>
                                <div className="text">Humidity</div>
                            </div>
                        </div>
                        <div className="element">
                            <img src={wind_icon} alt="" className='icon' />
                            <div className="data">
                                <div className="humidity-precent">{`${windSpeed}km/h`}</div>
                                <div className="text">Wind Speed</div>
                            </div>
                        </div>
                    </div>
                </>
            }

            {
                isLoading && <p>Loading weather data...</p>
            }

        </div>
    )
}

export default Weather
