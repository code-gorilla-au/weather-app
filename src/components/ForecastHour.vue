<template>
  <section>
    <p>{{ time }}</p>
    <img :src="conditionIcon" :alt="conditionTextnpm" />
  </section>
</template>

<script lang="ts">
import { Hour } from "@/lib/weather";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "ForecastHour",
  props: {
    hour: {
      type: Object as PropType<Hour>,
      required: true,
    },
  },
  setup(props) {
    return {
      time: new Date(props.hour.time),
      conditionText: props.hour.condition.text,
      conditionIcon: props.hour.condition.icon,
    };
  },
});
</script>

<style></style>
