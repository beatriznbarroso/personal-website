<script lang="ts">
  import { defineComponent } from 'vue'
  import HomeMenu from '../components/HomeMenu.vue'

  export default defineComponent({
    components: {
      HomeMenu,
    }
  })
</script>

<template>
  <main>
    <HomeMenu />
  </main>
</template>
