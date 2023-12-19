<script>
import NavBar from "./NavBar.vue";
export default {
  name: "AppHeader",
  components: {
    NavBar,
  },
  data() {
    return {
      links: [
        "Home",
        "Pages",
        "Program",
        "Tickets",
        "Speakers",
        "Papers",
        "Blog",
        "Shortcodes",
      ],
    };
  },
};
</script>

<template>
  <header>
    <NavBar />
    <div class="jumbo"></div>
  </header>
</template>

<style lang="scss"></style>
