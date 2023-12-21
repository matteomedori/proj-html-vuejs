<script>
import Sponsors from "./Sponsors.vue";
export default {
  name: "SectionSponsors",
  components: {
    Sponsors,
  },
};
</script>

<template>
  <section>
    <div class="container">
      <h2>Sponsors</h2>
      <p>
        Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies
        vehicula ut id elit.
      </p>
      <Sponsors />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/variables" as *;
section {
  background-color: $sponsors-bg;
  text-align: center;

  .container {
    padding: 85px 0 70px 0;

    h2 {
      font-size: 35px;
      letter-spacing: 4px;
    }

    p {
      padding: 30px 350px 55px 350px;
      color: gray;
      line-height: 22px;
    }
  }
}
</style>
