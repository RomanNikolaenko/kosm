<template lang="pug">
.post
  h1 {{ posts.title }}
  p {{ posts.body }}

  .comments
    .comments__block(v-for="comment of comments", :key="comment.id")
      h3 {{ comment.name }}
      h3.comments__link
        a(:href="'mailto:' + comment.email") {{ comment.email }}
      p {{ comment.body }}
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params }) {
    const posts = await $axios.$get(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
    // const userComments = await $axios.$get('https://jsonplaceholder.typicode.com/comments/' + params.id)
    return { posts };
  },
  async fetch({ store }) {
    if (store.getters["comments/comments"].length === 0) {
      await store.dispatch("comments/fetch");
    }
  },
  computed: {
    comments() {
      return this.$store.getters["comments/comments"];
    },
  },
};
</script>

<style lang="scss" >
@import "~/assets/main";

.post {
  margin-top: 100px;
  @media (max-width: 1200px) {
    margin-top: calc(40px + (100 - 40) * ((100vw - 320px) / (1200 - 320)));
  }
  h1 {
    margin-bottom: 20px;
  }
  h3 {
    font-weight: 400;
    &:not(:nth-of-type(1)) {
      margin-top: 15px;
    }
    &:nth-last-of-type(1) {
      margin-bottom: 20px;
    }
  }
}

.comments {
  margin-bottom: 50px;
  @media (max-width: 576px) {
    margin-bottom: 30px;
  }
  &__block {
    margin-top: 30px;
    &:not(:nth-last-of-type(1)) {
      border-bottom: 1px solid #000;
    }

    a {
      font-weight: 800;
      @include anchor(#000, #000);
      display: initial;
    }
  }

  &__link {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>