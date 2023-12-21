<script>
export default {
  name: "SectionWhoWhatWhy",
  data() {
    return {
      subSections: [
        {
          icon: "fa-solid fa-trophy",
          title: "who we are",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat distinctio harum aliquam.",
          linkText: "Learn More",
        },
        {
          icon: "fa-solid fa-bolt-lightning",
          title: "what we do",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat distinctio harum aliquam.",
          linkText: "Learn More",
        },
        {
          icon: "fa-solid fa-question",
          title: "why us?",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat distinctio harum aliquam.",
          linkText: "Learn More",
        },
      ],
    };
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div v-for="subSection in subSections">
        <div class="left">
          <font-awesome-icon :icon="subSection.icon" />
        </div>
        <div class="right">
          <h5>{{ subSection.title }}</h5>
          <p>
            {{ subSection.paragraph }}
          </p>
          <a href="#">{{ subSection.linkText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/variables" as *;
section {
  .container {
    padding: 65px 0 55px 0;
    display: flex;
    gap: 25px;

    & > div {
      width: calc(100% / 3);
      display: flex;
      gap: 25px;

      h5 {
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
      }

      p {
        margin: 20px 0;
        color: $icon-gray;
        line-height: 24px;
      }

      a {
        color: $button-bg;
        font-style: italic;
        font-size: 16px;
        font-weight: 500;
      }
    }

    .left {
      color: $icon-gray;
      font-size: 25px;
    }
  }
}
</style>
