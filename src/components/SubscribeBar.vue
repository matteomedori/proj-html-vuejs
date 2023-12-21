<script>
export default {
  name: "SubscribeBar",
};
</script>

<template>
  <div class="subscribeBar">
    <form>
      <label for="subscribe" hidden>Subscribe</label>
      <input
        type="text"
        placeholder="Please fill your email"
        name="subscribe"
        id="subscribe"
      />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
input[type="text"] {
  padding: 20px 250px 20px 25px;
  border: none;
  margin-right: 20px;
}

button {
  padding: 20px 25px 16px 25px;
  background: red;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  border-bottom: 4px solid #a72510;
  font-weight: 600;
}
</style>
