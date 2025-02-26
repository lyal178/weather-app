import axios from "axios";

const API_KEY = "3fa30f8f0366a3938838b8c2cb4ba344"
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherByCity = async (city) => {
  let endpoints = [
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`,
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`,
  ];

  try {
    const responses = await Promise.all(endpoints.map((url) => axios.get(url)));
    return responses.map((response) => response.data);
  } catch (error) {
    throw new Error(`Failed to fetch weather data: ${error.message}`);
  }
};

export const getWeatherByCoords = async (lat, lon) => {
  let endpoints = [
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ];
  try {
    const responses = await Promise.all(endpoints.map((url) => axios.get(url)));
    return responses.map((response) => response.data);
  } catch (error) {
    throw new Error(`Failed to fetch weather data: ${error.message}`);
  }
};

