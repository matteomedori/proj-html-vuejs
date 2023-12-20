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
section {
  height: 500px;
  background-color: #f3f3f3;
  .container {
    padding: 80px 0 70px 0;
  }
}
</style>
