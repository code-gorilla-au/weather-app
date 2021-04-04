<template>
  <div class="forecast-details">
    <span class="forecast-details-row">
      <base-icon icon="fa-temperature-low fa-2x" />
      <span class="forecast-detail-text">{{ minTemp }}</span>
    </span>
    <span class="forecast-details-row">
      <base-icon icon="fa-temperature-high fa-2x" />
      <span class="forecast-detail-text">{{ maxTemp }}</span>
    </span>
    <span class="forecast-details-row">
      <base-icon icon="fa-tint fa-2x" />
      <span class="forecast-detail-text">{{ chanceOfRain }}</span>
    </span>
    <span class="forecast-details-row">
      <base-icon icon="fa-wind fa-2x" />
      <span class="forecast-detail-text">{{ windSpeed }}</span>
    </span>
  </div>
</template>
<script lang="ts">
import { formatCelsius } from "@/lib/format";
import { Day } from "@/lib/weather";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ForecastDetaisl",
  props: {
    day: {
      type: Object as PropType<Day>,
    },
  },
  setup(props) {
    return {
      minTemp: formatCelsius(props.day?.mintemp_c || ""),
      maxTemp: formatCelsius(props.day?.maxtemp_c || ""),
      chanceOfRain: formatCelsius(props.day?.daily_chance_of_rain || ""),
      windSpeed: formatCelsius(props.day?.maxwind_kph || ""),
    };
  },
});
</script>
<style lang="scss" scoped>
@import "src/assets/styles/variables";

.forecast-details {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
}
.forecast-detail-text {
  margin-left: 0.5rem;
  font-size: $font-lg;
}
.forecast-details-row {
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 33%;
}
</style>
