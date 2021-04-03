<template>
  <div class="home">
    <div class="home-weather-summary">
      <div>
        <h2>{{ location.name }}</h2>
        <h1>{{ currentTemp }}</h1>
        <h4>{{ current.condition.text }}</h4>
      </div>
      <div>
        <img :src="current.condition.icon" :alt="current.condition.text" />
      </div>
    </div>
    <div class="home-weather-details">
      <p>
        <base-icon icon="fa-temperature-low" />
        {{ minTemp }}
      </p>
      <p>
        <base-icon icon="fa-temperature-high" />
        {{ maxTemp }}
      </p>
      <p>
        <base-icon icon="fa-tint" />
        {{ changeOfRain }}
      </p>
      <p><base-icon icon="fa-wind" /> {{ windSpeed }}</p>
    </div>
    <ForecastAstro :astro="astro" />
    <div class="home-hourly-forecast">
      <ForecastHour v-for="hour in hours" :key="hour.time" :hour="hour" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getForecast } from "@/api/weather";
import { formatCelsius, formatKph, formatPercent } from "@/lib/format";
import BaseIcon from "@/components/BaseIcon.vue";
import ForecastHour from "@/components/ForecastHour.vue";
import ForecastAstro from "@/components/ForecastAstro.vue";

export default defineComponent({
  name: "Home",
  components: { BaseIcon, ForecastHour, ForecastAstro },
  async setup() {
    const defaultLocation = "Sydney";
    const dayIndex = ref(0);
    const { data } = await getForecast(defaultLocation, 1);
    const today = data.forecast.forecastday[dayIndex.value].day;
    const week = data.forecast.forecastday;
    const current = data.current;
    const hours = data.forecast.forecastday[dayIndex.value].hour;
    const astro = data.forecast.forecastday[dayIndex.value].astro;
    const currentTemp = formatCelsius(current.temp_c);
    const minTemp = formatCelsius(today.mintemp_c);
    const maxTemp = formatCelsius(today.maxtemp_c);
    const changeOfRain = formatPercent(today.daily_chance_of_rain);
    const windSpeed = formatKph(today.maxwind_kph);
    return {
      location: data.location,
      current,
      currentTemp,
      astro,
      hours,
      minTemp,
      maxTemp,
      changeOfRain,
      windSpeed,
      week,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  margin: 0rem 0.5rem;
}
.home-weather-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home-weather-details {
  display: flex;
  justify-content: space-evenly;
}
.home-astro-details {
  display: flex;
}
.home-hourly-forecast {
  margin: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  overflow-x: auto;
}
</style>
