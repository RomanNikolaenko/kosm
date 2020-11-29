<template lang="pug">
div
  .seo-text
    h1.seo-text__title Long Beach Surfing Institute
    p.seo-text__descr Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.

  .intro
    .intro__wrap
      .intro__reviews
        h4.intro__reviews-title Recent reviews
        p.intro__reviews-descr Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed incididunt ut labore et dolore magn.
        span.intro__reviews-author - Steve Woz
      .intro__reviews
        p.intro__reviews-descr Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed incididunt ut labore et dolore magn.
        span.intro__reviews-author - David Collum

    .intro__wrap.videos
      .videos__big
        video(
          controls="controls",
          poster="https://espanarusa.com/files/autoupload/37/14/60/p2bfdjqp374521.jpg"
        )
          source(
            type="video/mp4",
            src="https://media.w3.org/2010/05/sintel/trailer.mp4"
          )

      .videos__little
        h4.videos__title User Videos
        .videos__little-wrap
          div
            video(
              controls="controls",
              poster="https://espanarusa.com/files/autoupload/37/14/60/p2bfdjqp374521.jpg"
            )
            source(
              type="video/mp4",
              src="https://media.w3.org/2010/05/sintel/trailer.mp4"
            )
            p.videos__author By
              span Cisco Roman
          div
            video(
              controls="controls",
              poster="https://espanarusa.com/files/autoupload/37/14/60/p2bfdjqp374521.jpg"
            )
              source(
                type="video/mp4",
                src="https://media.w3.org/2010/05/sintel/trailer.mp4"
              )
            p.videos__author By
              span Cisco Roman

  .carousel
    h2.carousel__title Popular Instractors
    VueSlickCarousel(v-bind="settings")
      .carousel__instructor
        img.carousel__instructor-img(
          src="~assets/img/carousel-1.jpg",
          alt="carousel-1"
        )
        h5.carousel__instructor-name Simon Adward
        p.carousel__instructor-students 5,000 students
      .carousel__instructor
        img.carousel__instructor-img(
          src="~assets/img/carousel-2.jpg",
          alt="carousel-2"
        )
        h5.carousel__instructor-name Elliana D’Soza
        p.carousel__instructor-students 4,350 students
      .carousel__instructor
        img.carousel__instructor-img(
          src="~assets/img/carousel-3.jpg",
          alt="carousel-3"
        )
        h5.carousel__instructor-name Joseph Bardon
        p.carousel__instructor-students 3,248 students
      .carousel__instructor
        img.carousel__instructor-img(
          src="~assets/img/carousel-1.jpg",
          alt="carousel-1"
        )
        h5.carousel__instructor-name Simon Adward
        p.carousel__instructor-students 5,000 students
      .carousel__instructor
        img.carousel__instructor-img(
          src="~assets/img/carousel-2.jpg",
          alt="carousel-2"
        )
        h5.carousel__instructor-name Elliana D’Soza
        p.carousel__instructor-students 4,350 students

  .blogs
    h2.blogs__title Recent Blogs by User
    .blogs__card
      .blogs__card-img
        img(src="~assets/img/blog-1.jpg", alt="blog-1")
      .blogs__card-content.blogs__content
        h3.blogs__content-title Lipsum cound be headline
        p.blogs__content-descr Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        nuxt-link.blogs__more(to="#") Read More
    .blogs__card
      .blogs__card-content.blogs__content
        h3.blogs__content-title Lipsum cound be headline
        p.blogs__content-descr Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        nuxt-link.blogs__more(to="#") Read More
      .blogs__card-img
        img(src="~assets/img/blog-2.jpg", alt="blog-2")

  .intrested
    h2.intrested__title Aren’t you intrested Yet!!
    nuxt-link.intrested__link(to="#") Enroll Now
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
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

.seo-text {
  margin-top: 161px;
  text-align: center;

  @media (max-width: 1200px) {
    margin-top: calc(30px + (161 - 30) * ((100vw - 320px) / (1200 - 320)));
  }

  &__descr {
    max-width: 472px;
    margin: 15px auto 167px;
    font-size: 13px;
    line-height: 1.8;

    @media (max-width: 1200px) {
      margin: 15px auto
        calc(30px + (167 - 30) * ((100vw - 320px) / (1200 - 320)));
    }
  }
}

.intro {
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
  &__reviews {
    width: 300px;
    flex: 0 0 auto;
    padding-left: 43px;
    padding-right: 45px;

    @media (max-width: 1200px) {
      padding-left: calc(15px + (43 - 15) * ((100vw - 1025px) / (1200 - 1025)));
      padding-right: calc(
        15px + (45 - 15) * ((100vw - 1025px) / (1200 - 1025))
      );
    }

    @media (max-width: 1024px) {
      padding-left: 15px;
      padding-right: 15px;
      width: 100%;
    }

    &:not(:first-child) {
      margin-top: 36px;
    }
    &-title {
      text-transform: capitalize;
      margin: 13px 0 32px;

      @media (max-width: 1024px) {
        margin: 20px 0 15px;
      }
    }
    &-descr {
      position: relative;
      font-size: 13px;
      line-height: 1.9;
      margin-bottom: 9px;

      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 4px;
        left: -15px;
        width: 30px;
        height: 23px;
        background: url("~assets/img/brackets.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    &-author {
      display: block;
      font-weight: 500;
      border-bottom: 1px solid $grey-light;
      padding-bottom: 11px;
      font-size: 14px;
    }
  }
}

video {
  width: 100%;
  object-fit: cover;
  flex: 1 1 auto;
}

.videos {
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
  &__big {
    max-width: 494px;
    margin: 0 85px 0 71px;

    @media (max-width: 1230px) {
      margin: 0 calc(10px + (85 - 10) * ((100vw - 1025px) / (1230 - 1025))) 0
        calc(10px + (71 - 10) * ((100vw - 1025px) / (1230 - 1025)));
    }

    @media (max-width: 1024px) {
      margin: 0;
      max-width: 100%;
    }

    video {
      @media (min-width: 768px) {
        height: 348px;
      }
    }
  }

  &__little {
    display: flex;
    flex-direction: column;
    max-width: 225px;
    margin-left: 20px;

    @media (max-width: 767px) {
      flex-wrap: wrap;
      flex-direction: row;
      max-width: 100%;
      margin-left: 0;
    }

    &-wrap {
      @media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        & > div {
          display: flex;
          flex-direction: column;
          width: 48%;
          margin-bottom: 10px;
        }
      }

      @media (max-width: 575px) {
        & > div {
          width: 100%;
        }
      }
    }
  }

  &__title {
    width: 100%;
    margin: 12px 0 21px;

    @media (max-width: 1024px) {
      margin: 0 0 15px;
    }
  }

  &__author {
    margin: 7px 0 4px;
    color: #000;
    text-align: right;
    font-size: 11.5px;
    font-weight: 800;
    span {
      text-transform: capitalize;
      margin-left: 5px;
      color: #119ff0;
    }
  }
}

.intrested {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 184px;
  @media (max-width: 1200px) {
    margin-top: calc(30px + (184 - 30) * ((100vw - 320px) / (1200 - 320)));
  }
  &__link {
    font-weight: 500;
    padding: 11px 37px;
    margin: 60px 0 116px;
    border: 1px solid #000;
    color: #000;
    text-decoration: none;
    transition: all 0.3s linear;

    @media (max-width: 1200px) {
      margin: calc(30px + (60 - 30) * ((100vw - 320px) / (1200 - 320))) 0
        calc(50px + (116 - 50) * ((100vw - 320px) / (1200 - 320)));
    }

    @media (min-width: 1025px) {
      &:hover {
        transform: translateY(-10px);
        box-shadow: 5px 5px 10px #000;
      }
    }
  }
}

.blogs {
  max-width: 850px;
  margin: 0 auto;
  &__title {
    text-align: center;
    margin-bottom: 71px;
    text-transform: initial;
    margin-left: 5px;

    @media (max-width: 1200px) {
      margin-bottom: calc(30px + (71 - 30) * ((100vw - 320px) / (1200 - 320)));
    }
  }

  &__card {
    display: flex;
    justify-content: space-between;

    @media (max-width: 880px) {
      flex-direction: column;
    }

    &:nth-of-type(n + 2) {
      margin-top: 145px;
      @media (max-width: 1200px) {
        margin-top: calc(30px + (145 - 30) * ((100vw - 320px) / (1200 - 320)));
      }
    }

    &:nth-of-type(2n + 2) {
      @media (max-width: 880px) {
        flex-direction: column-reverse;
      }
      .blogs__content {
        @media (min-width: 881px) {
          margin-left: 4px;
        }
      }
    }

    &-img {
      width: 50%;

      @media (max-width: 880px) {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      }
    }

    &-content {
      width: calc(50% - 59px);

      @media (max-width: 880px) {
        width: 100%;
      }
    }
  }

  &__content {
    &-title {
      text-transform: initial;
      font-style: italic;
      font-weight: 400;
      margin: 33px 0 18px;

      @media (max-width: 880px) {
        margin: 20px 0 10px;
      }
    }

    &-descr {
      line-height: 1.8;
      font-size: 13px;

      @media (min-width: 880px) {
        padding: 0 10px 0 5px;
      }
    }
  }

  &__more {
    display: inline-block;
    padding: 10px 21px;
    margin: 30px 0 30px 5px;
    border: 1px solid #9f9f9f;
    font-weight: 500;
    color: #000;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s linear;

    @media (max-width: 880px) {
      margin: 15px 0 20px;
    }

    @media (min-width: 1025px) {
      &:hover {
        transform: translateY(-10px);
        box-shadow: 5px 5px 10px #000;
      }
    }
  }
}
</style>