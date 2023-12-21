<script>
export default {
  name: "Ticket",
  props: ["duration", "cost", "advantages"],
};
</script>

<template>
  <div class="ticket">
    <div class="ticket-head">
      <h4>{{ duration }}</h4>
      <h5>{{ cost }}</h5>
    </div>
    <div class="ticket-content">
      <ul>
        <li v-for="advantage in advantages">{{ advantage }}</li>
      </ul>
    </div>
    <div class="ticket-foot">
      <h5>book now</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/variables" as *;
.ticket {
  width: calc((100% - 60px) / 3);
  text-align: center;

  .ticket-head {
    background-color: $ticket-head;
    padding: 30px 0;

    h4 {
      font-size: 21px;
    }

    h5 {
      color: $button-bg;
      margin-top: 5px;
      font-size: 18px;
    }
  }

  .ticket-content {
    color: $recent-news-text;
    font-style: italic;
    background-color: white;
    padding: 40px 0 15px 0;

    ul {
      li {
        margin-bottom: 25px;
      }
    }
  }

  .ticket-foot {
    background-color: $button-bg;
    color: white;
    padding: 20px 0;
    text-transform: uppercase;
  }
}
</style>
