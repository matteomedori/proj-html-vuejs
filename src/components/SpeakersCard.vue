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
    <div class="img-container">
      <img :src="getImagePath(imgUrl)" :alt="name" />
      <div class="overlay">
        <font-awesome-icon icon="fa-brands fa-twitter" />
        <font-awesome-icon icon="fa-brands fa-facebook-f" />
        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
      </div>
    </div>
    <h4 class="name">{{ name }}</h4>
    <h5 class="job">{{ job }}</h5>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: calc((100% - 90px) / 4);
  text-align: center;

  .img-container {
    max-width: 100%;
    border-radius: 5px;
    overflow: hidden;
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
      gap: 20px;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 2;
      opacity: 0;
      transition: 0.3s ease;
      background-color: rgba($color: #f62b0a, $alpha: 0.6);
      color: white;
      font-size: 20px;
    }

    &:hover .overlay {
      opacity: 1;
    }
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
