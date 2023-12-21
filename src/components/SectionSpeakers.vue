<script>
import SpeakersHead from "./SpeakersHead.vue";
import SpeakersCards from "./SpeakersCards.vue";
export default {
  name: "SectionSpeakers",
  components: {
    SpeakersHead,
    SpeakersCards,
  },
};
</script>

<template>
  <section>
    <div class="container">
      <SpeakersHead />
      <SpeakersCards />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/variables" as *;
section {
  background-color: $speakers-bg;
  .container {
    padding: 80px 0 70px 0;
  }
}
</style>
