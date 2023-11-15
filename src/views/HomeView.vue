<script lang="ts">
  import { defineComponent } from 'vue'
  import NameBox from '../components/NameBox.vue'
  import LineAnimation from '../components/LineAnimation.vue'

  export default defineComponent({
    components: {
      NameBox,
      LineAnimation
    }
  })
</script>

<template>
  <main>
    <NameBox />
    <LineAnimation />
  </main>
</template>
