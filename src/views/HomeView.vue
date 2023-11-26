<script lang="ts">
  import { defineComponent } from 'vue'
  import NameBox from '../components/NameBox.vue'

  export default defineComponent({
    components: {
      NameBox,
    }
  })
</script>

<template>
  <main>
    <NameBox />
  </main>
</template>
