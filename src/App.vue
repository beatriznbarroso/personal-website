<script lang="ts">
import HomeMenu from './components/HomeMenu.vue'
import { defineComponent } from 'vue'


export default defineComponent({
  components: {
    HomeMenu,
  }
})
</script>

<template>
  <HomeMenu />
  <RouterView />
</template>

<style>
</style>
