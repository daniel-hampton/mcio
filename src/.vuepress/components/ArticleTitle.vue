<template>
  <div>
    <img v-if="$page.frontmatter.image" :src="$page.frontmatter.image" :alt="$page.title"/>
    <h1>
      <router-link :to="{ path: `${$page.path}`}" class="header-anchor" aria-hidden="true">#</router-link>
      {{ $page.title }}
    </h1>
  </div>
</template>

<script>
export default {
};
</script>

<style>
</style>
