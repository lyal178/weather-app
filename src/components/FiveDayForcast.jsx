import styles from "../App.module.css";
const processDailyForecasts = (forecastData) => {
  const dailyData = {};
  forecastData.list.forEach((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!dailyData[date]) {
      dailyData[date] = {
        date,
        temp: item.main.temp,
        weather: item.weather[0],
        dt: item.dt,
      };
    }
  });
  return Object.values(dailyData).slice(0, 5);
};
const FiveDayForecast = ({ fiveDayForecast }) => {
  const getDayName = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };
  const dailyForecasts = processDailyForecasts(fiveDayForecast);
  return (
    <div className={`${styles.card} ${styles.fiveDayForecastCard}`}>
      <h2>5 day forecast</h2>
      <div className={styles.forecastList}>
        {dailyForecasts.map((day, index) => (
          <div key={index} className={styles.forecastItem}>
            <img
              src={`http://openweathermap.org/img/w/${day.weather.icon}.png`}
              alt={day.weather.description}
              className={styles.weatherIcon}
            />
            <div className={styles.hourTemp}>{Math.round(day.temp)}°C</div>
            <div className={styles.hourTime}>{getDayName(day.dt)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveDayForecast;
