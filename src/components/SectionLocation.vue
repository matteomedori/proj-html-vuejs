<script>
export default {
  name: "SectionLocation",
};
</script>

<template>
  <section>
    <div class="container">
      <h2>location</h2>
      <h3>Gd Building, Grand Conference Room</h3>
      <p>
        <font-awesome-icon icon="fa-solid fa-location-arrow" />
        11 Gd Building, River Mall, New York, USA 8879
      </p>
      <a href="#">Check For Accomodation Here</a>
      <img src="../assets/img/hr_white.jpg" alt="" />
      <ul>
        <li><font-awesome-icon icon="fa-solid fa-phone" /> +1-112-222-3344</li>
        <li>
          <font-awesome-icon
            icon="fa-solid fa-envelope"
          />Contact@TheKeynoteTheme.com
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/variables" as *;
section {
  height: 450px;
  padding: 100px 0 90px 0;
  background-image: url(../assets/img/location-bg.jpg);
  background-position: center;
  text-align: center;
  color: white;

  h2 {
    font-size: 40px;
    letter-spacing: 4px;
  }

  h3 {
    font-size: 22px;
    letter-spacing: 5px;
    margin: 45px 0 20px 0;
  }

  .fa-location-arrow,
  .fa-phone,
  .fa-envelope {
    margin-right: 10px;
  }

  a {
    display: block;
    color: $button-bg;
    margin: 25px 0 45px 0;
    font-size: 16px;
    letter-spacing: 2px;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 25px;
    margin-top: 5px;
  }

  img {
    max-width: 450px;
  }
}
</style>
