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
    <img :src="getImagePath(imgUrl)" alt="#" />
    <h5>{{ comments }}</h5>
    <h3>{{ title }}</h3>
    <p>
      {{ paragraph }}
    </p>
    <a href="#">{{ linkText }}</a>
  </div>
</template>

<style lang="scss" scoped>
.news {
  width: calc((100% - 60px) / 3);

  img {
    width: 100%;
  }

  p {
    margin: 30px 0;
    color: gray;
    line-height: 22px;
  }

  h5 {
    margin: 30px 0 15px 0;
    color: gray;
    letter-spacing: 2px;
    font-style: italic;
  }

  h3 {
    text-transform: uppercase;
  }
  a {
    color: red;
    font-style: italic;
  }
}
</style>
