<template>
  <div class="home">
    <div class="home-weather-summary">
      <div>
        <h3>{{ forecast.location.name }}</h3>
        <h3>{{ forecast.current.temp_c }}</h3>
        <p>{{ forecast.current.condition.text }}</p>
      </div>
      <div>
        <img
          :src="forecast.current.condition.icon"
          :alt="forecast.current.condition.text"
        />
      </div>
    </div>
    <div class="home-weather-details">
      <p>rain 10%</p>
      <p>wind 5km</p>
      <p>sunrise 8am</p>
      <p>sunset 9pm</p>
    </div>
    <div class="home-hourly-forecast">
      <p>8am</p>
      <p>9am</p>
      <p>10am</p>
      <p>11am</p>
      <p>12noon</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getForecast } from "@/api/weather";

export default defineComponent({
  name: "Home",
  components: {},
  async setup() {
    const forecast = ref({});
    const defaultLocation = "Sydney";
    const resp = await getForecast(defaultLocation, 1);
    forecast.value = resp.data;
    return {
      forecast,
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
.home-hourly-forecast {
  display: flex;
  justify-content: space-evenly;
}
</style>
