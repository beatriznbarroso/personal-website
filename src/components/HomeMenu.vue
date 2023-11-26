<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const clicked = ref(false)

</script>

<template>
  <div
    class="transition ease-in-out delay-150 w-full h-screen lg:w-1/2"
    :class="clicked ? 'bg-yellow-50' : 'bg-white-100'">
    <a
      @click="clicked = !clicked">
      <svg v-if="!clicked" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21" />
      </svg>
    </a>
    <div v-if="clicked">
      <RouterLink to="/" class="block">Home</RouterLink>
      <RouterLink to="about" class="block">About me</RouterLink>
      <RouterLink to="work" class="block">Work</RouterLink>
      <RouterLink to="projects" class="block">Current Side Projects</RouterLink>
    </div>
  </div>
</template>
