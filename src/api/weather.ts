import axios, { AxiosResponse } from "axios";

const API_KEY = process.env.VUE_APP_WEATHER_KEY;
const API_URL = process.env.VUE_APP_WEATHER_URL;

export interface Weather {
  location: Location;
  current: Current;
  forecast: {
    forecastday: Forecast[];
  };
}

export interface Forecast {
  date: string;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

export interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  daily_chance_of_rain: string;
  condition: Condition;
  uv: number;
}

export interface Hour {
  time: string;
  temp_c: number;
  condition: Condition;
  wind_kph: number;
  precip_mm: number;
  humidity: number;
  chance_of_rain: number;
  uv: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
}
export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  condition: Condition;
  wind_kph: number;
  wind_dir: string;
  humidity: number;
  feelslike_c: number;
  uv: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
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
): Promise<AxiosResponse<Weather>> {
  const url = `${API_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`;
  return axios.get(url);
}

export { getCurrentWeather, getForecast };
