<script>
export default {
  name: "Tweet",
  props: ["text", "posted"],
};
</script>

<template>
  <li>
    <font-awesome-icon icon="fa-brands fa-twitter" />
    <div class="tweet">
      <p v-html="text"></p>
      <p class="posted">{{ posted }}</p>
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  gap: 20px;
  color: gray;
  margin-bottom: 30px;
  line-height: 20px;

  .fa-twitter {
    color: #47beef;
    font-size: 20px;
  }

  .tweet {
    & > p:first-child {
      font-size: 14px;
      line-height: 22px;
    }
  }
  .posted {
    font-style: italic;
    margin-top: 15px;
    font-size: 13px;
  }

  a {
    color: red;
  }
}
</style>
