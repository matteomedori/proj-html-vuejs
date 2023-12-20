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
.nav-links {
  display: flex;
  gap: 30px;

  li {
    text-transform: uppercase;
    padding: 10px 0;
    border-bottom: 3px solid transparent;
    color: #8e8e8e;
    font-weight: 600;
    font-size: 14px;

    &:hover {
      color: red;
      cursor: pointer;
      border-color: red;
    }
  }
}
</style>
