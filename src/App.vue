<script lang="ts">
// import HomeMenu from './components/HomeMenu.vue'
import { defineComponent } from 'vue'
import 'swiper/css';
import 'swiper/css/pagination';


export default defineComponent({
  components: {
    // HomeMenu,
  }
})
</script>

<template>
  <!-- <HomeMenu /> -->
  <RouterView />
</template>

<style>
</style>
