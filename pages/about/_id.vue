<template lang="pug">
.info
  h1 {{ user.name }}
  h3 
    span Email:
    b 
      a(:href="'mailto:' + user.email") {{ user.email }}
  h3 
    span City:
    b {{ user.address.city }}
  h3 
    span Street:
    b {{ user.address.street }}
  h3 
    span Suite:
    b {{ user.address.suite }}

  .carousel
    VueSlickCarousel(v-bind="settings")
      .carousel__instructor(v-for="photo of userPhoto", :key="photo.id")
        img.carousel__instructor-img(:src="userPhoto.url", alt="carousel")
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(
      "https://jsonplaceholder.typicode.com/users/" + params.id
    );
    const userPhoto = await $axios.$get(
      "https://jsonplaceholder.typicode.com/photos/" + params.id
    );
    return { user, userPhoto };
  },
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/main";

.carousel {
  .slick {
    &-prev {
      transform: translate(-100%, calc(-50% - -6px));
      @media (max-width: 1024px) {
        transform: translate(0, calc(-50% - -6px));
      }
    }

    &-next {
      transform: translate(100%, calc(-50% - -6px)) rotate(180deg);
      @media (max-width: 1024px) {
        transform: translate(0, calc(-50% - -6px)) rotate(180deg);
      }
    }
  }
}

div.info {
  margin-top: 100px;
  @media (max-width: 1200px) {
    margin-top: calc(40px + (100 - 40) * ((100vw - 320px) / (1200 - 320)));
  }
  h1 {
    margin-bottom: 70px;
    @media (max-width: 1200px) {
      margin-bottom: calc(30px + (70 - 30) * ((100vw - 320px) / (1200 - 320)));
    }
  }
  h3 {
    font-weight: 400;
    &:not(:nth-of-type(1)) {
      margin-top: 15px;
    }
    &:nth-last-of-type(1) {
      margin-bottom: 70px;
      @media (max-width: 1200px) {
        margin-bottom: calc(
          30px + (70 - 30) * ((100vw - 320px) / (1200 - 320))
        );
      }
    }
    span {
      display: inline-block;
      margin-right: 10px;
    }
    a {
      @include anchor(#000, #000);
    }
  }
}
</style>