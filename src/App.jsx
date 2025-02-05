import { useState } from "react";
import { getWeatherByCity, getWeatherByCoords } from "./services/api";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import FiveDayForecast from "./components/FiveDayForcast";
import GeneralInfo from "./components/GeneralInfo";
import styles from "./App.module.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(
    "Welcome to Weather App! Please enter a city to get started."
  );

  const fetchWeatherByCity = async (city) => {
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
      setError(null);
    } catch (error) {
      setError("City not found");
      setWeather([]);
    }
  };
  const fetchWeatherByLocation = async (lat, lon) => {
    try {
      const data = await getWeatherByCoords(lat, lon);
      setWeather(data);
      setCity(data[0].name);
      setError(null);
    } catch (error) {
      setError("Could not fetch weather for your location");
      setWeather([]);
    }
  };

  return (
    <>
      <div className={styles.weatherApp}>
        <Header
          city={city}
          setCity={setCity}
          fetchWeatherByCity={fetchWeatherByCity}
          fetchWeatherByLocation={fetchWeatherByLocation}
        />
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.weatherGrid}>
          {weather[0] && <GeneralInfo weatherData={weather[0]} />}
          {weather[0] && <WeatherCard weatherData={weather[0]} />}
          {weather[1] && <HourlyForecast hourly={weather[1]} />}
          {weather[1] && <FiveDayForecast fiveDayForecast={weather[1]} />}
        </div>
      </div>
    </>
  );
}

export default App;
