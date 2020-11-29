<template lang="pug">
ul.list-posts
  li.list-posts__item(v-for="post of posts", :key="post.id")
    .list-posts__img(v-for="photo of photos", :key="post.id")
      img(:src="photo.url", alt="photo")
    .list-posts__wrap
      a.list-posts__link(href="#", @click.prevent="openPost(post)") {{ post.title }}
      p.list-posts__descr {{ post.body }}
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["posts/posts"].length === 0 && store.getters["photos/photos"].length === 0) {
      await store.dispatch("posts/fetch");
      await store.dispatch("photos/fetch");
    }
  },
  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    },
    photos() {
      return this.$store.getters["photos/photos"];
    },
  },
  methods: {
    openPost(post) {
      let route = this.$router.resolve({ path: "/blog/" + post.id });
      window.open(route.href, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/main";

.list-posts {
  list-style: none;
  padding-left: 0;
  margin: 80px 0;

  @media (max-width: 1200px) {
    margin: calc(30px + (80 - 30) * ((100vw - 320px) / (1200 - 320))) 0;
  }

  &__item {
    display: flex;
    border: 1px solid #000;
    padding: 15px;

    @media (max-width: 576px) {
      flex-direction: column;
    }

    &:nth-of-type(n + 2) {
      margin-top: 15px;
    }
  }

  &__img {
    width: 200px;
    align-self: flex-start;
    flex: 0 0 auto;
    margin-right: 15px;

    img {
      object-fit: contain;
    }

    @media (max-width: 576px) {
      width: 100%;
      max-width: 300px;
      margin: 0 auto 15px;
    }
  }

  &__link {
    font-size: 22px;
    @include anchor(#000, #000);
  }

  &__descr {
    margin: 10px 0 0;
  }
}
</style>