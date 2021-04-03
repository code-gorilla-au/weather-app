<template>
  <i :class="[pack, icon]"></i>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    pack: {
      type: String,
      required: false,
      default: "fas",
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
