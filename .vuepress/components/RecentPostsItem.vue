<template>
  <div class="row">
    <div class="col-6 col-sm-3">
      <img v-if="post.frontmatter.image" :src="post.frontmatter.image" :alt="post.title">
    </div>
    <div class="col-auto col-sm-9">
      <router-link
        :key="post.id"
        :to="{path: post.path}">
        <h3>{{post.title}}</h3>
      </router-link>
      <h4>{{post.frontmatter.published}}</h4>
      <div v-html="post.excerpt"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentPostsItem",
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
  a:hover {
    text-decoration: underline;
  }

  h4 {
    color: darkslategrey;
    margin-block-start: 0;
    margin-block-end: 0;
  }
</style>
