<template>
  <div class="lorem-ipsum">
    <p>{{ text }}</p>
  </div>
</template>

<script>
import { loremIpsum } from "lorem-ipsum";
export default {
  props: {
    numSentences: {
      type: Number,
      default: 3
    }
  },
  computed: {
    text: function() {
      return loremIpsum({
        count: this.numSentences,
        format: "plain",
        units: "sentences"
      });
    }
  }
};
</script>

<style>
</style>