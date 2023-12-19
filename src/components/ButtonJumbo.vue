<script>
export default {
  name: "ButtonJumbo",
  props: ["buttonText"],
};
</script>

<template>
  <button>{{ buttonText }}</button>
</template>

<style lang="scss">
button {
  padding: 20px 25px;
  background-color: red;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
}
</style>
