<script>
import Ticket from "./Ticket.vue";
export default {
  name: "Tickets",
  components: {
    Ticket,
  },
  data() {
    return {
      tickets: [
        {
          duration: "one day pass",
          cost: "free",
          advantages: [
            "One Day Access",
            "Coffee Break",
            "Lunch(International buffet)",
            "Document Sheets",
            "50usd Voucher for Next Event",
          ],
        },
        {
          duration: "four day passes",
          cost: "750.00 usd",
          advantages: [
            "Four Day Access",
            "Coffee Break",
            "Lunch(International buffet)",
            "Document Sheets",
            "100usd Voucher for Next Event",
          ],
        },
        {
          duration: "two day passes",
          cost: "580.00 usd",
          advantages: [
            "Two Day Access",
            "Coffee Break",
            "Lunch(International buffet)",
            "Document Sheets",
            "70usd Voucher for Next Event",
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="tickets">
    <Ticket
      v-for="ticket in tickets"
      :duration="ticket.duration"
      :cost="ticket.cost"
      :advantages="ticket.advantages"
    />
  </div>
</template>

<style lang="scss" scoped>
.tickets {
  display: flex;
  gap: 30px;
}
</style>
