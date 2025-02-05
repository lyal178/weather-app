import styles from "../App.module.css";
import humidityIcon from "../icons/humidity.svg";
import windIcon from "../icons/wind.svg";
import pressureIcon from "../icons/pressure.svg";
import uvIcon from "../icons/uv.svg";
const WeatherCard = ({ weatherData }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const { main, sys, weather, wind } = weatherData;

  return (
    <div className={`${styles.card} ${styles.weatherCard}`}>
      <div className={styles.weatherGeneralInfo}>
        <div className={styles.temperature}>
          {main.temp.toFixed(0)} °C
        </div>
        <div className={styles.feelsLike}>
          Feels like: {main.feels_like.toFixed(0)} °C
        </div>
        <div className={styles.sunTime}>
          <div>Sunrise: {formatTime(sys.sunrise)}</div>
          <div>Sunset: {formatTime(sys.sunset)}</div>
        </div>
      </div>
      <div className={styles.weatherIconContainer}>
        <img
          className={styles.weatherIcon}
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
        <p>{weather[0].description}</p>
      </div>

      <div className={styles.metricsGrid}>
        <div className={styles.metricItem}>
          <img src={humidityIcon} className={styles.weatherIcon} alt="Humidity" />
          <div>
            <div className={styles.metricValue}>{main.humidity}</div>
            <div className={styles.metricLabel}>Humidity</div>
          </div>
        </div>
        <div className={styles.metricItem}>
          <img src={windIcon} className={styles.weatherIcon} alt="Wind Speed" />
          <div>
            <div className={styles.metricValue}>
              {(wind.speed * 2.23694).toFixed(1)} mph
            </div>
            <div className={styles.metricLabel}>Wind Speed</div>
          </div>
        </div>
        <div className={styles.metricItem}>
          <img src={pressureIcon} className={styles.weatherIcon} alt="Pressure" />
          <div>
            <div className={styles.metricValue}>{main.pressure}</div>
            <div className={styles.metricLabel}>Pressure</div>
          </div>
        </div>
        <div className={styles.metricItem}>
          <img src={uvIcon} className={styles.weatherIcon} alt="UV Index" />
          <div>
            <div className={styles.metricValue}>8</div>
            <div className={styles.metricLabel}>UV Index</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
