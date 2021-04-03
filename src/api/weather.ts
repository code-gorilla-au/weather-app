import axios, { AxiosResponse } from "axios";

const API_KEY = process.env.VUE_APP_WEATHER_KEY;
const API_URL = process.env.VUE_APP_WEATHER_URL;

export interface Forecast {
  location: Location;
  current: Current;
}

export interface Location {
  name: string;
  region: string;
  country: string;
}
export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: Float64Array;
  condition: Condition;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

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
): Promise<AxiosResponse<Forecast>> {
  const url = `${API_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`;
  return axios.get(url);
}

export { getCurrentWeather, getForecast };
