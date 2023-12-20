<script>
export default {
  name: "OpacityElements",
  props: ["opacityElem"],
};
</script>

<template>
  <div class="opacity-container">
    <div class="opacity-elem" v-for="elem in opacityElem">
      <div class="count">{{ elem.count }}</div>
      <div class="type">{{ elem.type }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.opacity-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  .opacity-elem {
    padding: 0 50px;
    height: 140px;
    background-color: rgba($color: #000000, $alpha: 0.8);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }

  .opacity-elem:nth-child(2) {
    background-color: rgba($color: #000000, $alpha: 0.7);
  }

  .opacity-elem:nth-child(3) {
    background-color: rgba($color: #000000, $alpha: 0.6);
  }

  .opacity-elem:nth-child(4) {
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
  .count {
    font-size: 50px;
    font-weight: 700;
  }

  .type {
    text-transform: uppercase;
  }
}
</style>
