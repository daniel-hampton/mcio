<template>
  <router-link
    :key="post.id"
    :to="{path: post.path}">
    <div class="row rounded bg-light-gray shadow-lg hover:shadow-none overflow-hidden">
      <div class="col-12 col-sm-3 h-large">
        <img data-no-zoom class="cover" v-if="post.frontmatter.image" :src="post.frontmatter.image" :alt="post.title">
      </div>
      <div class="col-auto col-sm-9 h-large text-overflow">

          <h3>{{post.title}}</h3>
        
        <h4>{{post.frontmatter.published}}</h4>
        <div class="text-overflow" v-html="post.excerpt"></div>
      </div>
    </div>
  </router-link>
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
  /* a:hover {
    text-decoration: underline;
  } */

  h4 {
    color: darkslategrey;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .cover {
    object-fit: cover;
    height: 100%;
  }

  .h-large {
    height: 12rem;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .text-overflow {
    text-overflow: ellipsis;
  }

  .rounded {
    border-radius: 0.50rem;
  }

  .bg-light-gray {
    background-color: #edf2f7;
  }

  .shadow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .hover\:shadow-none:hover {
    box-shadow: none;
  }
</style>
