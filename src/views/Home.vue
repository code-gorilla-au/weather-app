<template>
  <div class="home">
    <div class="home-weather-summary">
      <div class="home-weather-current">
        <span class="weather-current-location">{{ location }}</span>
        <span class="weather-current-temp">{{ currentTemp }}</span>
        <span class="weather-current-condition">{{
          current.condition.text
        }}</span>
      </div>

      <div class="weather-current-image">
        <figure>
          <img :src="current.condition.icon" :alt="current.condition.text" />
        </figure>
      </div>
    </div>
    <ForecastDetails :day="today" />
    <ForecastAstro :astro="astro" />
    <div class="home-hourly-forecast">
      <ForecastHour v-for="hour in hours" :key="hour.time" :hour="hour" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getForecast } from "@/api/weather";
import { formatCelsius } from "@/lib/format";
import ForecastHour from "@/components/ForecastHour.vue";
import ForecastAstro from "@/components/ForecastAstro.vue";
import ForecastDetails from "@/components/ForecastDetails.vue";

export default defineComponent({
  name: "Home",
  components: { ForecastHour, ForecastAstro, ForecastDetails },
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
    return {
      location: defaultLocation,
      current,
      currentTemp,
      astro,
      hours,
      today,
      week,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.home {
  width: Min(100%, 550px);
  margin: 0 auto;
}
.home-weather-current {
  display: flex;
  flex-direction: column;
  margin: 0rem 0.5rem;

  & .weather-current-location {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  & .weather-current-temp {
    font-size: $font-5xl;
    font-weight: 900;
  }

  & .weather-current-condition {
    font-weight: 700;
    border-radius: 9px;
    text-align: center;
    background-color: $colour-secondary-default;
    color: $colour-dark-default;
  }
}
.home-weather-summary {
  margin: 1rem 0;
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
