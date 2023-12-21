<script>
export default {
  name: "DaysProgram",
  props: ["days"],
};
</script>

<template>
  <div class="days">
    <div class="day" v-for="day in days">
      <h4>{{ day.numberDay }}</h4>
      <h5>{{ day.date }}</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.days {
  display: flex;
  gap: 1px;
  background-color: #c72b11;
  color: white;

  .day {
    width: calc((100% - 5px) / 6);
    background-color: #f62b0a;
    padding: 20px 0 20px 20px;

    &:first-of-type {
      background-color: #c72b11;
    }

    h4 {
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    h5 {
      font-weight: 400;
    }
  }
}
</style>
