<script>
export default {
  name: "LinkList",
  props: ["linkList"],
};
</script>

<template>
  <ul class="nav-links">
    <li v-for="link in linkList">{{ link }}</li>
    <li><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></li>
  </ul>
</template>

<style lang="scss">
@use "../assets/css/partials/variables" as *;

.nav-links {
  display: flex;
  gap: 30px;

  li {
    text-transform: uppercase;
    padding: 10px 0;
    border-bottom: 3px solid transparent;
    color: $link-color;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 2px;

    &:hover {
      color: $button-bg;
      cursor: pointer;
      border-color: $button-bg;
    }
  }
}
</style>
