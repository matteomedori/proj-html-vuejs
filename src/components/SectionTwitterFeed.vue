<script>
import TweetList from "./TweetList.vue";
import VideoBar from "./VideoBar.vue";
export default {
  name: "SectionTwitterFeed",
  components: {
    TweetList,
    VideoBar,
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="presentation">
        <h3>Presentation</h3>
        <div class="video">
          <img src="../assets/img/presentation.jpg" alt="presentation" />
          <button><font-awesome-icon icon="fa-solid fa-play" /></button>
          <VideoBar />
        </div>
      </div>
      <div class="twitter-feed">
        <h3>Twitter Feed</h3>
        <TweetList />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 400px;

  .container {
    padding: 90px 0;
    display: flex;

    .presentation,
    .twitter-feed {
      width: 50%;

      h3 {
        text-transform: uppercase;
        font-size: 26px;
        letter-spacing: 1px;
      }
    }

    .presentation {
      .video {
        padding: 40px;
        position: relative;
        img {
          max-width: 450px;
        }
      }

      button {
        background-color: rgba($color: #000000, $alpha: 0.8);
        color: white;
        padding: 7px 25px;
        border-radius: 5px;
        font-size: 20px;
        position: absolute;
        left: 0;
        bottom: 55px;
      }
    }
  }
}
</style>
