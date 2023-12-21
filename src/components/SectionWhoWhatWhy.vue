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
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
      }

      p {
        margin: 20px 0;
        color: gray;
        line-height: 24px;
      }

      a {
        color: #f62b0a;
        font-style: italic;
        font-size: 16px;
        font-weight: 500;
      }
    }

    .left {
      color: #bababa;
      font-size: 25px;
    }
  }
}
</style>
