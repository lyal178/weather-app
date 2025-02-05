import styles from "../App.module.css";
const GeneralInfo = ({ weatherData }) => {
  return (
    <div className={`${styles.card} ${styles.timeCard}`}>
      <h1 className={styles.cityName}>{weatherData.name}</h1>
      <p className={styles.time}>
        {new Date(weatherData.dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p className="date">{new Date(weatherData.dt * 1000).toLocaleDateString()}</p>
    </div>
  );
};
export default GeneralInfo;
