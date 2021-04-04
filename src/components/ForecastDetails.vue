<template>
  <div class="forecast-details">
    <div class="forecast-details-row">
      <base-icon icon="fa-temperature-low fa-2x" />
      <span class="forecast-detail-text">{{ minTemp }}</span>
    </div>
    <div class="forecast-details-row">
      <base-icon icon="fa-temperature-high fa-2x" />
      <span class="forecast-detail-text">{{ maxTemp }}</span>
    </div>
    <div class="forecast-details-row">
      <base-icon icon="fa-tint fa-2x" />
      <span class="forecast-detail-text">{{ chanceOfRain }}</span>
    </div>
    <div class="forecast-details-row">
      <base-icon icon="fa-wind fa-2x" />
      <span class="forecast-detail-text">{{ windSpeed }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { formatCelsius, formatPercent } from "@/lib/format";
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
      chanceOfRain: formatPercent(props.day?.daily_chance_of_rain || ""),
      windSpeed: formatCelsius(props.day?.maxwind_kph || ""),
    };
  },
});
</script>
<style lang="scss" scoped>
@import "src/assets/styles/variables";

.forecast-details {
  margin: 2rem 0rem;
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
  width: 25%;
}
</style>
