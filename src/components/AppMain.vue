<script>
import SectionWhoWhatWhy from "./SectionWhoWhatWhy.vue";
import SectionSubscribe from "./SectionSubscribe.vue";
export default {
  name: "AppMain",
  components: {
    SectionWhoWhatWhy,
    SectionSubscribe,
  },
};
</script>

<template>
  <main>
    <SectionWhoWhatWhy />
    <SectionSubscribe />
  </main>
</template>

<style lang="scss"></style>
