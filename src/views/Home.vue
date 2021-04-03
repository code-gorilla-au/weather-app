<template>
  <div class="home">
    <div class="home-weather-summary">
      <div>
        <h3>Sydney</h3>
        <h3>18</h3>
        <p>Cloudy</p>
      </div>
      <div>cloudy graphic</div>
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
import { defineComponent, onMounted, ref } from "vue";
import { getForecast } from "@/api/weather";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const forecast = ref({});
    onMounted(async () => {
      await getForecast("Sydney", 1);
    });
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
