<template>
  <router-link :key="post.id" :to="{path: post.path}">
    <div class="row rounded bg-gray-100 shadow overflow-hidden">
      <div class="col-sm-3">
        <img
          data-no-zoom
          class="cover h-large w-full"
          v-if="articleThumbnail"
          :src="articleThumbnail"
          :alt="post.title"
        />
      </div>
      <div class="col-auto col-sm-9 h-large text-overflow">
        <h3>{{post.title}}</h3>

        <h4>{{post.frontmatter.published}}</h4>
        <div class="text-overflow text-darkgray" v-html="post.excerpt"></div>
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
      required: true
    }
  },
  computed: {
    articleThumbnail: function () {
      return this.post.frontmatter.thumbnail
        ? this.post.frontmatter.thumbnail
        : this.post.frontmatter.image;
    }
  }
};
</script>

<style scoped>
.theme-default-content a:hover {
  text-decoration: none;
}

img {
  display: block;
}
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
.h-64 {
  height: 64rem;
}

.overflow-hidden {
  overflow: hidden;
}

.text-overflow {
  text-overflow: ellipsis;
}

.rounded {
  border-radius: 0.5rem;
}

.text-darkgray {
  color: darkslategray;
}

.bg-gray-100 {
  background-color: #f7fafc;
}
.bg-light-gray {
  background-color: #edf2f7;
}

.bg-mcio-blue {
  background-color: #00b4d7;
}

.text-white {
  color: whitesmoke;
}

.w-full {
  width: 100%;
}

.p-0 {
  padding: 0;
}
.px-0 {
  padding-left: 0;
  padding-right: 0;
}

.shadow {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-none:hover {
  box-shadow: none;
}
</style>
