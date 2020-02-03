<template>
  <div class="recent-posts">
    <RecentPostsItem v-for="post in recentPosts" :post="post" />
  </div>
</template>

<script>
import RecentPostsItem from "./RecentPostsItem";
export default {
  components: {
    RecentPostsItem,
  },
  computed: {
    recentPosts() {
      return this.$site.pages.filter(page => page.frontmatter.published != null).sort((first, last) => {
        const tsFirst = new Date(first.frontmatter.published);
        const tsSecond = new Date(last.frontmatter.published);
        if (tsFirst > tsSecond) {
          // if datetime is greater, put it earlier in the list. (descending).
          return -1;
        } else {
          return 1;
        }
      });
    }
  }
};
</script>

<style scoped>
.recent-posts {
  display: block;
}
</style>
