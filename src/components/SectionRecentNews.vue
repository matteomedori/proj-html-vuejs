<script>
import RecentNewsHead from "./RecentNewsHead.vue";
import RecentNewsContent from "./RecentNewsContent.vue";
export default {
  name: "SectionRecentNews",
  components: {
    RecentNewsHead,
    RecentNewsContent,
  },
};
</script>

<template>
  <section>
    <div class="container">
      <RecentNewsHead />
      <RecentNewsContent />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  .container {
    padding: 80px 0 70px 0;
  }
}
</style>
