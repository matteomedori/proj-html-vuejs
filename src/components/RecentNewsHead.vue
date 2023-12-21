<script>
export default {
  name: "RecentNewsHead",
};
</script>

<template>
  <div class="recent-news-head">
    <h2>Recent News</h2>
    <div class="right-head">Read All News</div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/variables" as *;
.recent-news-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  h2 {
    font-size: 28px;
    letter-spacing: 2px;
  }

  .right-head {
    color: $button-bg;
    font-style: italic;
  }
}
</style>
