<script>
import News from "./News.vue";
export default {
  name: "RecentNewsContent",
  components: {
    News,
  },
  data() {
    return {
      allNews: [
        {
          imgUrl: "../assets/img/news-1.jpg",
          comments: "03 Dec 2013 / 0 Comments",
          newsTitle: "Sedial eiusmod tempor",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur reiciendis quisquam corrupti explicabo sapiente molestias, repellat, voluptas placeat.",
          linkText: "Read More",
        },
        {
          imgUrl: "../assets/img/news-2.jpg",
          comments: "03 Dec 2013 / 2 Comments",
          newsTitle: "donec luctus imperdiet",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur reiciendis quisquam corrupti explicabo sapiente molestias, repellat, voluptas placeat.",
          linkText: "Read More",
        },
        {
          imgUrl: "../assets/img/news-3.jpg",
          comments: "03 Dec 2013 / 2 Comments",
          newsTitle: "magna pars studiorum",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur reiciendis quisquam corrupti explicabo sapiente molestias, repellat, voluptas placeat.",
          linkText: "Read More",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="news-container">
    <News
      v-for="news in allNews"
      :imgUrl="news.imgUrl"
      :comments="news.comments"
      :title="news.newsTitle"
      :paragraph="news.paragraph"
      :linkText="news.linkText"
    />
  </div>
</template>

<style lang="scss" scoped>
.news-container {
  display: flex;
  gap: 30px;
}
</style>
