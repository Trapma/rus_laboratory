<template>
  <h1 class="h1">{{ text }}</h1>
</template>

<script>
export default {
  name: "header-title",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;

  color: white;
}
</style>
