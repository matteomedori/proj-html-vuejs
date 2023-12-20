<script>
import SubscribeBar from "./SubscribeBar.vue";
import OpacityElements from "./OpacityElements.vue";
export default {
  name: "SectionSubscribe",
  components: {
    SubscribeBar,
    OpacityElements,
  },
  data() {
    return {
      elements: [
        {
          count: 3339,
          type: "days",
        },
        {
          count: 17,
          type: "hours",
        },
        {
          count: 28,
          type: "min",
        },
        {
          count: 17,
          type: "sec",
        },
      ],
    };
  },
};
</script>

<template>
  <section>
    <div class="container">
      <OpacityElements :opacityElem="elements" />
      <h3>subscribe for updates</h3>
      <SubscribeBar />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url(../assets/img/coutdown-bg1.jpg);
  background-position: center;
  text-align: center;

  .container {
    padding: 100px;

    h3 {
      text-transform: uppercase;
      margin: 50px 0 40px 0;
      font-size: 25px;
      letter-spacing: 2px;
    }
  }
}
</style>
