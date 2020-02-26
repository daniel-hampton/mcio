<template>
  <div>
    <span v-for="tag in Object.keys(tags).sort()">
      <h2 :id="tag">
        <router-link
          :to="{ path: `/tags/#${tag}`}"
          class="header-anchor"
          aria-hidden="true"
        >#</router-link>
        <!-- {{tag}} -->
        <Badge :text="tag" vertical="middle" type="tip"/>
      </h2>
      <ul>
        <li v-for="page in tags[tag]">
          <router-link
            :to="{path: page.path }">{{ page.title }}</router-link>
        </li>
      </ul>
    </span>
    <!-- <h2>Pages</h2> -->
    <!-- <pre class="language-javascript">{{ this.$site.pages | pretty}}</pre> -->
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = {};
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index];
          if (tag in tags) {
            tags[tag].push(page);
          } else {
            tags[tag] = [page];
          }
        }
      }
      return tags;
    }
  },
  filters: {
    pretty: function(value) {
      return JSON.stringify(value, null, 2);
    }
  }
}
</script>

<style>

</style>
