<script>
import DaysProgram from "./DaysProgram.vue";
import ScheduleProgram from "./ScheduleProgram.vue";
export default {
  name: "ProgramPlan",
  components: {
    DaysProgram,
    ScheduleProgram,
  },
  data() {
    return {
      days: [
        {
          numberDay: "Day 1",
          date: "23 May 2016",
        },
        {
          numberDay: "Day 2",
          date: "23 May 2030",
        },
        {
          numberDay: "Day 3",
          date: "24 May 2030",
        },
        {
          numberDay: "Day 4",
          date: "25 May 2030",
        },
        {
          numberDay: "Day 5",
          date: "26 May 2030",
        },
        {
          numberDay: "",
          date: "",
        },
      ],
    };
  },
};
</script>

<template>
  <DaysProgram :days="days" />
  <ScheduleProgram />
</template>

<style lang="scss" scoped></style>
