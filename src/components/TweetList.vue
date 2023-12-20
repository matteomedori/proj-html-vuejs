<script>
import Tweet from "./Tweet.vue";
export default {
  name: "TweetList",
  components: {
    Tweet,
  },
  data() {
    return {
      tweets: [
        {
          text: 'Stand out and be vibrant with some of the best bright and bold templates on <a href="#">@Envato</a> Elements. And add a splash of c...<a href="#">https/FhkFjk</a>',
          posted: "3 days ago",
        },
        {
          text: 'Do you need to deliver the perfect presentation or creative pitch? Sure, your ideas and plan need to be on-point, b..<a href="#">https/ncjKDKDL</a>',
          posted: "3 days ago",
        },
        {
          text: 'Cut yourself a piece of the BFCM sales pie with a solid marketing plan. Here are 5 ways to optimize your content fo..<a href="#">https/cnjKdD</a>',
          posted: "3 days ago",
        },
      ],
    };
  },
};
</script>

<template>
  <ul>
    <Tweet v-for="tweet in tweets" :text="tweet.text" :posted="tweet.posted" />
  </ul>
</template>

<style lang="scss" scoped>
ul {
  margin: 40px 0 40px 10px;
}
</style>
