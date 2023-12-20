<script>
export default {
  name: "Sponsors",
  data() {
    return {
      sponsors: [
        "../assets/img/banner-1.jpg",
        "../assets/img/banner-2.jpg",
        "../assets/img/banner-3.jpg",
        "../assets/img/banner-4.jpg",
        "../assets/img/banner-5.jpg",
        "../assets/img/banner-6.jpg",
      ],
    };
  },
  methods: {
    getImagePath(url) {
      return new URL(url, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="sponsors">
    <div class="sponsor" v-for="sponsor in sponsors">
      <img :src="getImagePath(sponsor)" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sponsors {
  display: flex;
  gap: 30px;

  .sponsor {
    width: calc((100% - 150px) / 6);
    background-color: white;
  }
}
</style>
