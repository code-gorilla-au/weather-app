import axios, { AxiosResponse } from "axios";
import { Weather } from "@/lib/weather";

const API_KEY = process.env.VUE_APP_WEATHER_KEY;
const API_URL = process.env.VUE_APP_WEATHER_URL;

async function getCurrentWeather(
  location = "Sydney"
): Promise<AxiosResponse<Record<string, unknown>>> {
  const url = `${API_URL}/current.json?key=${API_KEY}&q=${location}&aqi=no`;
  const response = await axios.get(url);
  return response;
}

async function getForecast(
  location = "Sydney",
  days = 5
): Promise<AxiosResponse<Weather>> {
  const url = `${API_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`;
  return axios.get(url);
}

export { getCurrentWeather, getForecast };
