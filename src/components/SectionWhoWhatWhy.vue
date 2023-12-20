<script>
export default {
  name: "SectionWhoWhatWhy",
  data() {
    return {
      subSections: [
        {
          icon: "fa-solid fa-trophy",
          title: "who are we",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat distinctio harum aliquam ullam at assumenda nisi.",
          linkText: "Learn more",
        },
        {
          icon: "fa-solid fa-bolt-lightning",
          title: "what we do",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat distinctio harum aliquam ullam at assumenda nisi.",
          linkText: "Learn more",
        },
        {
          icon: "fa-solid fa-question",
          title: "why us?",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat distinctio harum aliquam ullam at assumenda nisi.",
          linkText: "Learn more",
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
    padding: 55px 0;
    display: flex;
    gap: 25px;

    & > div {
      width: calc(100% / 3);
      display: flex;
      gap: 25px;
      h5 {
        text-transform: uppercase;
        font-size: 18px;
      }

      p {
        margin: 20px 0;
        color: gray;
        line-height: 20px;
      }

      a {
        color: red;
        font-style: italic;
        font-size: 18px;
      }
    }
  }
}
</style>
