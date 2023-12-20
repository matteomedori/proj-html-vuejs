<script>
import SpeakersCard from "./SpeakersCard.vue";
export default {
  name: "SpeakersCards",
  components: {
    SpeakersCard,
  },
  data() {
    return {
      cards: [
        {
          imgUrl: "../assets/img/speaker-1.jpg",
          name: "Patrick Spencer",
          job: "S&P Analyzer",
        },
        {
          imgUrl: "../assets/img/speaker-2.jpg",
          name: "Janet Jones",
          job: "Newyork Post's GM",
        },
        {
          imgUrl: "../assets/img/speaker-3.jpg",
          name: "Michael Dover",
          job: "Starbucks's CEO",
        },
        {
          imgUrl: "../assets/img/speaker-4.jpg",
          name: "Angelina Holy",
          job: "Maxii's Manager",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="cards">
    <SpeakersCard
      v-for="card in cards"
      :name="card.name"
      :imgUrl="card.imgUrl"
      :job="card.job"
    />
  </div>
</template>

<style lang="scss" scoped>
.cards {
  display: flex;
  gap: 30px;
}
</style>
