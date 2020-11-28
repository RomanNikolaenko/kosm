<template lang="pug">
.contacts
  h1 Contacts
  h3 Phone:
    a(href="tel:+xxxxxxxxxxx") +xxx-xxx-xxx-xxx
  h3 Email:
    a(href="mailto:xxxxxxx@xxxx") xxxxxxx@xxxx
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~/assets/main";
.contacts {
  margin: 100px 0;
  @media (max-width: 1200px) {
    margin: calc(40px + (100 - 40) * ((100vw - 320px) / (1200 - 320))) 0;
  }
  h1 {
    margin-bottom: 30px;
  }
  h3 {
    overflow: hidden;
    font-weight: 400;
    &:not(:nth-of-type(1)) {
      margin-top: 15px;
    }
    &:nth-last-of-type(1) {
      margin-bottom: 20px;
    }
  }

  a {
    @include anchor(#000, #000);
    margin-left: 10px;
  }
}
</style>