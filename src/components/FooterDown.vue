<script>
export default {
  name: "FooterDown",
};
</script>

<template>
  <section class="footer-down">
    <div class="container">
      <div class="left-foot">
        &#169; Copyright Goodlayers, All Right Reserved
      </div>
      <ul class="right-foot">
        <li>About us</li>
        <li>|</li>
        <li>Acoomodation</li>
        <li>|</li>
        <li>Call For Paper</li>
        <li>|</li>
        <li>Contact us</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/variables" as *;
.footer-down {
  background-color: $footer-down-bg;
  color: $text-primary-color;

  .container {
    padding: 25px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right-foot {
      display: flex;
      gap: 5px;
    }
  }
}
</style>
