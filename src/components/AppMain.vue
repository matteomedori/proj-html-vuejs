<script>
import SectionWhoWhatWhy from "./SectionWhoWhatWhy.vue";
import SectionSubscribe from "./SectionSubscribe.vue";
import SectionSpeakers from "./SectionSpeakers.vue";
import SectionProgram from "./SectionProgram.vue";
import SectionMap from "./SectionMap.vue";
import SectionLocation from "./SectionLocation.vue";
import SectionRecentNews from "./SectionRecentNews.vue";
export default {
  name: "AppMain",
  components: {
    SectionWhoWhatWhy,
    SectionSubscribe,
    SectionSpeakers,
    SectionProgram,
    SectionMap,
    SectionLocation,
    SectionRecentNews,
  },
};
</script>

<template>
  <main>
    <SectionWhoWhatWhy />
    <SectionSubscribe />
    <SectionSpeakers />
    <SectionProgram />
    <SectionMap />
    <SectionLocation />
    <SectionRecentNews />
  </main>
</template>

<style lang="scss"></style>
