<script lang="ts">
import { RouterView } from 'vue-router'
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
