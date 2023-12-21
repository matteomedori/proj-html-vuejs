<script>
export default {
  name: "News",
  props: ["imgUrl", "comments", "title", "paragraph", "linkText"],
  methods: {
    getImagePath(url) {
      return new URL(url, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="news">
    <div class="news-img-container">
      <img :src="getImagePath(imgUrl)" alt="#" />
      <div class="overlay">
        <font-awesome-icon icon="fa-solid fa-bullhorn" /> Sticky post
      </div>
    </div>
    <h5>{{ comments }}</h5>
    <h3>{{ title }}</h3>
    <p>
      {{ paragraph }}
    </p>
    <a href="#">{{ linkText }}</a>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/variables" as *;
.news {
  width: calc((100% - 60px) / 3);

  .news-img-container {
    max-width: 100%;
    position: relative;

    img {
      width: 100%;
      display: block;
    }

    .overlay {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      gap: 8px;
      bottom: 0;
      right: 0;
      height: 30px;
      width: 150px;
      z-index: 2;
      opacity: 0;
      transition: 0.3s ease;
      background-color: #232323;
      color: white;
      font-size: 20px;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 2px;
    }

    &:hover .overlay {
      opacity: 1;
    }
  }

  p {
    margin: 30px 0;
    color: $recent-news-text;
    line-height: 24px;
    font-size: 14px;
  }

  h5 {
    margin: 30px 0 15px 0;
    color: $recent-news-text;
    letter-spacing: 2px;
    font-style: italic;
    font-weight: 500;
    font-size: 15px;
  }

  h3 {
    letter-spacing: 2px;
  }

  a {
    color: $button-bg;
    font-style: italic;
    letter-spacing: 1px;
  }
}
</style>
