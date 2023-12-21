<script>
export default {
  name: "ProgramHead",
};
</script>

<template>
  <div class="section-head">
    <h2>Program</h2>
    <div class="center-program">
      <p>This conference run through all 4 days from 23-26 May 2016.</p>
      <p>We also provide free lunch and coffee break in each day.</p>
    </div>
    <div class="right-program">View Full Program</div>
  </div>
</template>

<style lang="scss" scoped>
.section-head {
  display: flex;
  align-items: center;
  margin-bottom: 70px;
  gap: 60px;

  h2 {
    text-transform: uppercase;
    font-size: 35px;
    letter-spacing: 2px;
  }

  .center-program {
    padding-right: 200px;
    flex-grow: 1;
    color: gray;

    p {
      margin-bottom: 5px;
    }
  }

  .right-program {
    color: red;
    font-style: italic;
  }
}
</style>
