<script>
import SectionWhoWhatWhy from "./SectionWhoWhatWhy.vue";
import SectionSubscribe from "./SectionSubscribe.vue";
import SectionSpeakers from "./SectionSpeakers.vue";
import SectionProgram from "./SectionProgram.vue";
export default {
  name: "AppMain",
  components: {
    SectionWhoWhatWhy,
    SectionSubscribe,
    SectionSpeakers,
    SectionProgram,
  },
};
</script>

<template>
  <main>
    <SectionWhoWhatWhy />
    <SectionSubscribe />
    <SectionSpeakers />
    <SectionProgram />
  </main>
</template>

<style lang="scss"></style>
