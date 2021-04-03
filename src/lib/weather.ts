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
