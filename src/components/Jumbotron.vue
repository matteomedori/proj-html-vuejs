<script>
import ButtonJumbo from "./ButtonJumbo.vue";
export default {
  name: "Jumbotron",
  components: {
    ButtonJumbo,
  },
};
</script>

<template>
  <div class="jumbo">
    <div class="container">
      <h2>conference on</h2>
      <h1>Social Networks</h1>
      <div><img src="../assets/img/hr_white.jpg" alt="" /></div>
      <ul>
        <li>23 - 26 MAY 2019</li>
        <li>/</li>
        <li>San Francisco</li>
        <li>/</li>
        <li>8 Speakers</li>
      </ul>
      <ButtonJumbo :buttonText="'register online'" />
    </div>
  </div>
</template>

<style lang="scss">
.jumbo {
  background-image: url(../assets/img/slider-1-bg.jpg);
  background-size: auto;
  color: white;
  text-align: center;
  text-transform: uppercase;

  .container {
    padding: 120px;

    h1 {
      font-size: 75px;
      font-weight: 900;
      letter-spacing: 3px;
      margin-bottom: 30px;
    }

    h2 {
      font-size: 55px;
      font-weight: 200;
      letter-spacing: 3px;
      margin-bottom: 20px;
    }

    ul {
      margin: 10px 0 40px 0;
      display: flex;
      justify-content: center;
      gap: 30px;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
}
</style>
