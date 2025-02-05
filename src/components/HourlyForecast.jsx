import styles from "../App.module.css";
const HourlyForecast = ({ hourly }) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
  const isNight = (hour) => {
    return hour.dt < hourly.city.sunrise || hour.dt > hourly.city.sunset;
  };
  return (
    <div className={`${styles.card} ${styles.hourlyCard}`}>
      <h2>Hourly forecast</h2>
      <div className={styles.hourlyScroll}>
        {hourly.list.slice(0, 5).map((hour, index) => (
          <div
            key={index}
            className={
              isNight(hour)
                ? `${styles.hourCard} ${styles.night}`
                : `${styles.hourCard}`
            }
          >
            <div className={styles.hourTime}>
              {new Date(hour.dt * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather.description}
            />
            <div className={styles.hourTemp}>{hour.main.temp.toFixed(0)}°</div>
            <div >{directions[Math.round(hour.wind.deg / 45) % 8]}</div>
            <div className={styles.hourWind}>
              {(hour.wind.speed * 2.23694).toFixed(1)} mph
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
