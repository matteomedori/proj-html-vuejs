<script>
import SectionWhoWhatWhy from "./SectionWhoWhatWhy.vue";
import SectionSubscribe from "./SectionSubscribe.vue";
import SectionSpeakers from "./SectionSpeakers.vue";
export default {
  name: "AppMain",
  components: {
    SectionWhoWhatWhy,
    SectionSubscribe,
    SectionSpeakers,
  },
};
</script>

<template>
  <main>
    <SectionWhoWhatWhy />
    <SectionSubscribe />
    <SectionSpeakers />
  </main>
</template>

<style lang="scss"></style>
