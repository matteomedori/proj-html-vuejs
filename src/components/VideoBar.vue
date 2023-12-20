<script>
export default {
  name: "VideoBar",
};
</script>

<template>
  <div class="video-bar">
    <div class="loading-bar"></div>
    <img src="../assets/img/volume-bars.png" alt="" />
    <font-awesome-icon icon="fa-solid fa-gear" />
    <img src="../assets/img/vimeo.png" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.video-bar {
  width: 440px;
  height: 35px;
  background-color: rgba($color: #000000, $alpha: 0.8);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  position: absolute;
  right: 35px;
  bottom: 55px;

  .loading-bar {
    flex-grow: 1;
    height: 100%;
    border: 1px solid white;
  }

  img {
    max-height: 100%;
    color: white;
  }

  .fa-gear {
    color: white;
  }
}
</style>
