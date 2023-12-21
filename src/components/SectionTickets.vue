<script>
import Tickets from "./Tickets.vue";
export default {
  name: "SectionTickets",
  components: {
    Tickets,
  },
};
</script>

<template>
  <section>
    <div class="container">
      <h2>Tickets</h2>
      <Tickets />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url(../assets/img/ticket-bg.jpg);

  .container {
    padding: 90px 0 70px 0;

    h2 {
      text-align: center;
      color: white;
      font-size: 40px;
      letter-spacing: 3px;
      margin-bottom: 55px;
    }
  }
}
</style>
