<script>
export default {
  name: "ButtonJumbo",
  props: ["buttonText"],
};
</script>

<template>
  <button>{{ buttonText }}</button>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/variables" as *;

button {
  padding: 20px 35px;
  background-color: $button-bg;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
}
</style>
