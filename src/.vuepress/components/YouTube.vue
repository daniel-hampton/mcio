<template>
  <div class="videoWrapper">
    <iframe
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      frameborder="0"
      :src="`https://www.youtube.com/embed/${videoId}`"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoUrl: {
      type: String,
      default: '',
      required: true,
    }
  },
  computed: {
    urlParts() {
      return this.videoUrl.split('/');
    },
    videoId() {
      return this.urlParts[this.urlParts.length - 1];
    }
  }
};
</script>

<style scoped>
  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }

  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
