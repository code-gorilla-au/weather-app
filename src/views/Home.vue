<template>
  <div class="home">
    <div class="home-weather-summary">
      <div>
        <h3>{{ location.name }}</h3>
        <h3>{{ currentTemp }}</h3>
        <p>{{ current.condition.text }}</p>
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
    <div class="home-astro-details">
      <p><base-icon icon="fa-sun" /> {{ astro.sunrise }}</p>
      <p><base-icon pack="far" icon="fa-sun" /> {{ astro.sunset }}</p>
      <p><base-icon icon="fa-moon" /> {{ astro.moonrise }}</p>
      <p><base-icon pack="far" icon="fa-moon" /> {{ astro.moonset }}</p>
    </div>
    <div class="home-hourly-forecast">
      <p v-for="hour in hours" :key="hour.date">
        {{ hour.time }}
        <img :src="hour.condition.icon" :alt="hour.condition.text" />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getForecast } from "@/api/weather";
import { formatCelsius, formatKph, formatPercent } from "@/lib/format";
import BaseIcon from "@/components/BaseIcon.vue";

export default defineComponent({
  name: "Home",
  components: { BaseIcon },
  async setup() {
    const defaultLocation = "Sydney";
    const dayIndex = ref(0);
    const { data } = await getForecast(defaultLocation, 1);
    const today = data.forecast.forecastday[dayIndex.value].day;
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
    };
  },
});
</script>

<style lang="scss" scoped>
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
  display: flex;
  justify-content: space-evenly;
  overflow-x: auto;
}
</style>
