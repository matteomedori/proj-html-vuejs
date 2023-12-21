<script>
export default {
  name: "ScheduleProgram",
};
</script>

<template>
  <div class="schedule">
    <div class="schedule-left">
      <ul>
        <li>
          <font-awesome-icon icon="fa-regular fa-clock" />
          <p>09:00 / 10:30</p>
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-location-arrow" />
          <p>ROOM A</p>
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-user" />
          <p>LAURENCE FRANCIS</p>
        </li>
      </ul>
    </div>
    <div class="schedule-right">
      <h3>Welcoming and introduction</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, totam eum
        cupiditate ullam assumenda quibusdam non molestiae sequi iure delectus?
        Repellat cupiditate nihil similique.
      </p>
      <img src="../assets/img/speaker-5-150x150.jpg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/variables" as *;
.schedule {
  padding: 60px 45px;
  background-color: $program-sect-bg;
  display: flex;

  .schedule-left {
    width: 25%;

    ul {
      color: $recent-news-text;
      li {
        margin-bottom: 20px;
        display: flex;
        gap: 15px;
        font-size: 13px;

        &:last-of-type p {
          color: $button-bg;
        }
      }
    }
  }

  .schedule-right {
    width: 75%;

    h3 {
      color: $program-sect-gray;
      font-size: 25px;
      font-weight: 500;
      letter-spacing: 2px;
    }

    p {
      margin: 25px 0;
      color: $recent-news-text;
      line-height: 25px;
    }

    img {
      max-width: 45px;
    }
  }
}
</style>
