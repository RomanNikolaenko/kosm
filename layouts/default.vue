<template lang="pug">
.wrapper
  .container
    <Navbar/>
    main
      <Nuxt />
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "~/assets/main";
</style>