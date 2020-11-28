<template lang="pug">
footer.footer
  .footer__wrap
    .footer__copy
      h6.footer__title Beach Surfing
      p.copyright Copyright © 2018 All Rights Reserved.
    .footer__designed
      p Designed by
        nuxt-link(to="#") Rikon Rahman
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~/assets/main";
.footer {
  padding: 33px 0;
  font-size: 14px;
  border-top: 1px solid $grey-light;
  &__wrap {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    max-width: 935px;
    padding: 0 15px 0 0;
    margin: 0 auto;
    @media (max-width: 965px) {
      padding: 0 15px;
    }

    @media (max-width: 400px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  &__title {
    margin: 0 0 9px;
  }
  &__copy {
    .copyright {
      font-size: 11px;
      margin: 0;
    }
  }
  &__designed {
    p {
      font-size: 11px;
      margin: 10px 0 0;
      a {
        font-weight: 800;
        margin-left: 5px;
        @include anchor(#000, #000);
      }
    }
  }
}
</style>

