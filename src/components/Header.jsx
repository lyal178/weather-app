import styles from "../App.module.css";
function Header({ city, setCity, fetchWeatherByCity, fetchWeatherByLocation }) {
  const handleLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByLocation(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert(
            "Unable to get your location. Please try entering city manually."
          );
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.searchBar}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.searchBtn}
            onClick={() => fetchWeatherByCity(city)}
          >
            Search
          </button>
          <div className={styles.locationBtnContainer}>
            <button className={styles.locationBtn} onClick={handleLocation}>
              Location
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
