<script>
export default {
  name: "SpeakersCard",
  props: ["name", "imgUrl", "job"],
  methods: {
    getImagePath(url) {
      return new URL(url, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="card">
    <img :src="getImagePath(imgUrl)" :alt="name" />
    <h4 class="name">{{ name }}</h4>
    <h5 class="job">{{ job }}</h5>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: calc((100% - 90px) / 4);
  text-align: center;

  img {
    max-width: 100%;
    border-radius: 5px;
    display: block;
  }

  .name {
    margin: 25px 0 12px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #343434;
  }

  .job {
    color: #707070;
    font-style: italic;
    font-weight: 600;
  }
}
</style>
