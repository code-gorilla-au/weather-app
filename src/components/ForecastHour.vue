<template>
  <div class="forecast-hour">
    <p>
      <img :src="conditionIcon" :alt="conditionText" />
      {{ temp }}
      {{ time }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Hour } from "@/lib/weather";
import { formatCelsius } from "@/lib/format";

export default defineComponent({
  name: "ForecastHour",
  props: {
    hour: {
      type: Object as PropType<Hour>,
      required: true,
    },
  },
  setup(props) {
    const splitTime = props.hour.time.split(" ");
    return {
      time: splitTime[1],
      conditionText: props.hour.condition.text,
      conditionIcon: props.hour.condition.icon,
      temp: formatCelsius(props.hour.temp_c),
    };
  },
});
</script>

<style lang="scss">
.forecast-hour {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
