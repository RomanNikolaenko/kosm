<template lang="pug">
header.header
  nav.header__nav
    nuxt-link.header__logo(exact, no-prefetch, to="/")
      img.header__logo-img(src="~assets/img/logo.png", alt="Nuxt.js Logo")

    button.header__toggler(@click="onClick")
      i

    ul.header__list
      li.header__list-item
        nuxt-link.header__list-link(
          exact,
          no-prefetch,
          active-class="active",
          to="/"
        ) Home
      li.header__list-item
        nuxt-link.header__list-link(active-class="active", to="/about") About
      li.header__list-item
        nuxt-link.header__list-link(active-class="active", to="/blog") Blog
      li.header__list-item
        nuxt-link.header__list-link(active-class="active", to="/contact") Contact
</template>

<script>
export default {
  methods: {
    onClick() {
      document.body.classList.toggle("hidden");
      document.querySelector(".header__list").classList.toggle("open");
      document.querySelector(".header__toggler i").classList.toggle("open");

      let headerLink = document.querySelectorAll(".header__list-link");

      for (let i = 0; i < headerLink.length; i++) {
        headerLink[i].addEventListener("click", () => {
          document.body.classList.remove("hidden");
          document.querySelector(".header__list").classList.remove("open");
          document.querySelector(".header__toggler i").classList.remove("open");
        });
      }

      document.addEventListener("click", function (e) {
        if (
          !$(e.target).closest(".header__list").length &&
          !$(e.target).closest(document.querySelector(".header__toggler"))
            .length
        ) {
          document.body.classList.remove("hidden");
          document.querySelector(".header__list").classList.remove("open");
          document.querySelector(".header__toggler i").classList.remove("open");
        }
        e.stopPropagation();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/main";
.header {
  padding-top: 73px;

  @media (max-width: 1200px) {
    padding-top: calc(20px + (73 - 20) * ((100vw - 768px) / (1200 - 768)));
  }

  @media (max-width: 767px) {
    padding-top: 20px;
  }
  &__nav {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    @media (max-width: 767.98px) {
      align-items: center;
    }
  }
  &__logo {
    width: 33px;
    height: 29px;
    margin-left: 42px;

    @media (max-width: 767.98px) {
      margin-left: 0;
    }

    &.nuxt-link-active {
      pointer-events: none;
    }
    &-img {
      width: 100%;
      height: 100%;
    }
  }
  &__toggler {
    @media (min-width: 768px) {
      display: none;
    }
    position: relative;
    z-index: 100;
    display: flex;
    align-items: center;
    background: transparent;
    margin: 0;
    padding: 0;
    border: none;

    width: 55px;
    height: 40px;

    &:focus {
      outline: none;
    }

    i {
      position: absolute;
      left: 0;
      top: 50%;

      width: 55px;
      height: 4px;

      background-color: #000;
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      transition-duration: 0.22s;
      transition-property: transform;

      &:before,
      &:after {
        content: "";
        position: absolute;
        left: 0;

        width: inherit;
        height: inherit;

        background: inherit;
      }

      &:before {
        transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
        top: calc(-10px + (-17 - -10) * ((100vw - 320px) / (738 - 320)));

        @media (min-width: 738px) {
          top: -17px;
        }
      }

      &:after {
        transition: bottom 0.1s ease-in 0.25s,
          transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        bottom: calc(-10px + (-17 - -10) * ((100vw - 320px) / (738 - 320)));

        @media (min-width: 738px) {
          bottom: -17px;
        }
      }

      &.open {
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: rotate(225deg);

        &:before {
          top: 0;
          transition: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
          opacity: 0;
        }

        &:after {
          bottom: 0;
          transition: bottom 0.1s ease-out,
            transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
          transform: rotate(-90deg);
        }
      }
    }
  }

  &__list {
    display: flex;
    padding: 0;
    margin: 0 36px -6px 0;
    list-style: none;
    font-size: 12.5px;
    text-transform: uppercase;

    @media (max-width: 767.98px) {
      position: fixed;
      z-index: 200;
      margin: 0;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
      width: 50%;
      min-width: 200px;
      height: 100vh;
      flex-direction: column;
      padding: 30px 15px 30px 25px;
      opacity: 0;
      transform: translateX(-100%);
      transition: all 0.3s linear;

      &.open {
        opacity: 1;
        transform: translateX(0);
      }
    }

    &-item {
      &:not(:last-child) {
        @media (min-width: 768px) {
          margin-right: 54px;
        }
      }
    }

    &-link {
      @include anchor($grey-light, #000);

      @media (max-width: 767.98px) {
        color: #fff;
        font-size: 19px;
        margin-bottom: 15px;
        border-bottom: 2px solid transparent;
      }

      &.active {
        pointer-events: none;
        font-weight: 500;
        @media (min-width: 768px) {
          color: #000;
        }

        @media (max-width: 767.98px) {
          border-bottom: 2px solid #fff;
        }
      }
    }
  }
}
</style>