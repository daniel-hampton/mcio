<template>
  <div>
    <span 
      v-for="(tag, index) in $page.frontmatter.tags"
      :key="tag"
    >
      <router-link
        :to="{ path: `/tags/#${tag}` }"
      >
        <!-- {{ tag }} -->
        <Badge :text="tag" vertical="middle"/>
      </router-link>
      <span v-if="$page.frontmatter.tags.length -1 !== index"></span>
    </span>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>