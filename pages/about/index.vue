<template lang="pug">
ul.list-user
  li.list-user__item(v-for="user of users", :key="user.id")
    a.list-user__link(href="#", @click.prevent="openUser(user)") {{ user.name }}
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["users/users"].length === 0) {
      await store.dispatch("users/fetch");
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/users"];
    },
  },
  methods: {
    openUser(user) {
      this.$router.push("/about/" + user.id);
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/main";

.list-user {
  counter-reset: li;
  list-style: none;
  padding-left: 30px;
  margin: 80px 0;

  @media (max-width: 1200px) {
    margin: calc(30px + (80 - 30) * ((100vw - 320px) / (1200 - 320))) 0;
  }

  @media (max-width: 576px) {
    padding-left: 0;
  }

  &__item {
    position: relative;
    display: flex;
    align-items: center;

    &:nth-of-type(n + 2) {
      margin-top: 10px;
    }

    &:before {
      content: counter(li);
      counter-increment: li;
      display: block;
      font-size: 26px;
      min-width: 30px;
      flex: 0 0 auto;
      text-align: right;
      line-height: 1.4;
      color: #000;
      margin-right: 20px;
    }
  }

  &__link {
    @include anchor(#000, #000);
    font-size: 26px;
  }
}
</style>