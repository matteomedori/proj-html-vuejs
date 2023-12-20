<script>
import ProgramHead from "./ProgramHead.vue";
import ProgramPlan from "./ProgramPlan.vue";
export default {
  name: "SectionProgram",
  components: {
    ProgramHead,
    ProgramPlan,
  },
};
</script>

<template>
  <section>
    <div class="container">
      <ProgramHead />
      <ProgramPlan />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  .container {
    padding: 120px 0 75px 0;
  }
}
</style>
