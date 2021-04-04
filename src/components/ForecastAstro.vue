<template>
  <div class="forecast-astro">
    <div class="astro-row">
      <base-icon icon="fa-sun fa-xl" />
      <span>
        <small>{{ sunrise }}</small>
      </span>
    </div>
    <div class="astro-row">
      <base-icon pack="far" icon="fa-sun fa-xl" />
      <span>
        <small>{{ sunset }}</small>
      </span>
    </div>
    <div class="astro-row">
      <base-icon icon="fa-moon fa-xl" />
      <span>
        <small>{{ moonrise }}</small>
      </span>
    </div>
    <div class="astro-row">
      <base-icon pack="far" icon="fa-moon fa-xl" />
      <span>
        <small>{{ moonset }}</small>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { Astro } from "@/lib/weather";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ForecastAstro",
  props: {
    astro: {
      type: Object as PropType<Astro>,
    },
  },
  setup(props) {
    return {
      sunrise: props.astro?.sunrise,
      sunset: props.astro?.sunset,
      moonrise: props.astro?.moonrise,
      moonset: props.astro?.moonset,
    };
  },
});
</script>

<style lang="scss" scoped>
.forecast-astro {
  margin: 1rem 0rem;
  display: flex;
  justify-content: space-evenly;
}
.astro-row {
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & span {
    margin-top: 0.5rem;
  }
}
</style>
