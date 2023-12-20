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
.section-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  h2 {
    text-transform: uppercase;
    font-size: 35px;
    letter-spacing: 2px;
  }

  button {
    background-color: red;
    padding: 13px;
    font-size: 10px;
    color: white;
    border-radius: 5px;
    margin: 0 2px;
  }
}
</style>
