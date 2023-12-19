<script>
import NavBar from "./NavBar.vue";
import Jumbotron from "./Jumbotron.vue";
export default {
  name: "AppHeader",
  components: {
    NavBar,
    Jumbotron,
  },
};
</script>

<template>
  <header>
    <NavBar />
    <Jumbotron />
  </header>
</template>

<style lang="scss"></style>
