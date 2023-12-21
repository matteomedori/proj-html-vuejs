<script>
export default {
  name: "FooterUp",
  data() {
    return {
      recentNews: [
        "sem porta mollis parturient",
        "nullam lorem mattis purus",
        "nibh sem sit ullamcorrer",
        "donec luctus imperdiet",
        "magna pars studiorum",
      ],
      galleryImages: [
        "../assets/img/footer-1.jpg",
        "../assets/img/footer-2.jpg",
        "../assets/img/footer-3.jpg",
        "../assets/img/footer-4.jpg",
        "../assets/img/footer-5.jpg",
        "../assets/img/footer-6.jpg",
        "../assets/img/footer-7.jpg",
        "../assets/img/footer-8.jpg",
        "../assets/img/footer-9.jpg",
        "../assets/img/footer-10.jpg",
        "../assets/img/footer-11.jpg",
        "../assets/img/footer-12.jpg",
      ],
    };
  },
  methods: {
    getImagePath(url) {
      return new URL(url, import.meta.url).href;
    },
  },
};
</script>

<template>
  <section class="footer-up">
    <div class="container">
      <div class="about-us">
        <h4>About us</h4>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <ul>
          <li><font-awesome-icon icon="fa-brands fa-square-facebook" /></li>
          <li><font-awesome-icon icon="fa-brands fa-square-twitter" /></li>
          <li><font-awesome-icon icon="fa-brands fa-linkedin" /></li>
          <li><font-awesome-icon icon="fa-brands fa-square-google-plus" /></li>
          <li><font-awesome-icon icon="fa-brands fa-square-pinterest" /></li>
          <li><font-awesome-icon icon="fa-brands fa-flickr" /></li>
        </ul>
      </div>
      <div class="recent-news">
        <h4>recent news</h4>
        <ul>
          <li v-for="news in recentNews">
            <font-awesome-icon icon="fa-solid fa-angle-right" />
            <span>{{ news }}</span>
          </li>
        </ul>
      </div>
      <div class="check-out">
        <h4>get your seat!</h4>
        <p>
          Book for your seat before it's too rate. We provide variety of tickets
          options.
        </p>
        <button>Check out tickets!</button>
      </div>
      <div class="gallery">
        <h4>gallery from last year</h4>
        <div class="footer-img-container">
          <div class="foot-img" v-for="imageUrl in galleryImages">
            <img :src="getImagePath(imageUrl)" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer-up {
  background-color: #212121;
  padding: 60px 0;
  color: white;

  .container {
    display: flex;

    & > div {
      width: calc(100% / 4);
    }

    h4 {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 14px;
      font-weight: 500;
    }
    .about-us {
      ul {
        display: flex;
        gap: 10px;

        li {
          font-size: 22px;
        }
      }

      p {
        padding: 30px 50px 30px 0;
        color: #babdbf;
        line-height: 20px;
      }
    }

    .recent-news {
      ul {
        margin-top: 30px;
        color: gray;
        padding: 0 10px;

        li {
          margin-bottom: 15px;

          span {
            margin-left: 10px;
            text-transform: uppercase;
            font-size: 10px;
            letter-spacing: 1px;
          }
        }
      }
    }

    .check-out {
      p {
        padding: 30px 20px 30px 0;
        color: #babdbf;
      }

      button {
        padding: 15px 20px;
        background: red;
        color: white;
        cursor: pointer;
        text-transform: uppercase;
        border-bottom: 2px solid #a72510;
        font-size: 12px;
        font-weight: 600;
      }
    }

    .gallery {
      .footer-img-container {
        margin-top: 30px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;

        .foot-img {
          width: calc((100% - 30px) / 4);

          img {
            max-width: 100%;
          }
        }
      }
    }
  }
}
</style>
