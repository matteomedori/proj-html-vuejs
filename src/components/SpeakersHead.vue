<script>
export default {
  name: "SpeakersHead",
};
</script>

<template>
  <div class="section-head">
    <h2>Speakers</h2>
    <div class="buttons">
      <button><font-awesome-icon icon="fa-solid fa-angle-left" /></button>
      <button><font-awesome-icon icon="fa-solid fa-angle-right" /></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/variables" as *;
.section-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  h2 {
    font-size: 38px;
    letter-spacing: 3px;
  }

  button {
    background-color: $button-bg;
    padding: 12px 16px;
    font-size: 12px;
    color: white;
    border-radius: 5px;
    margin: 0 3px;
  }
}
</style>
