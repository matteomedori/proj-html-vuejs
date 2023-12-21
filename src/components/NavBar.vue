<script>
import Logo from "./Logo.vue";
import LinkList from "./LinkList.vue";
export default {
  name: "NavBar",
  components: {
    Logo,
    LinkList,
  },
  data() {
    return {
      links: [
        "Home",
        "Pages",
        "Program",
        "Tickets",
        "Speakers",
        "Papers",
        "Blog",
        "Shortcodes",
        "|",
      ],
    };
  },
};
</script>

<template>
  <nav class="container">
    <Logo />
    <LinkList :linkList="links" />
  </nav>
</template>

<style lang="scss">
nav {
  padding: 40px 0 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
