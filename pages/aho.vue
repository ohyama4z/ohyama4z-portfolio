<template>
  <div>あほあほまぬけ{{ aho }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      aho: 'まぬけ',
    }
  },
})
</script>
