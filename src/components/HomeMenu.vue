<script setup lang="ts">
import { ref } from 'vue'
const clicked = ref(false)

</script>

<template>
  <div class="hidden lg:flex page justify-end my-4">
    <a href="#home" class="mx-2">Home</a>
    <a href="#about" class="mx-2">About Me</a>
    <a href="#projects" class="mx-2">Projects</a>
    <a href="#contact" class="mx-2">Contact</a>
  </div>
  <div
    class="block lg:hidden transition ease-in-out delay-75 w-full translate-[y-100%] lg:w-1/2 p-4"
    :class="clicked ? 'bg-red-50 translate-y-0 h-screen' : 'bg-white-100 '">
    <a
      class="block mb-8"
      @click="clicked = !clicked">
      <svg v-if="!clicked" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 transition ease-in-out delay-75">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21" />
      </svg>
    </a>
    <div v-if="clicked" class="h-1/2">
      <a href="#home" class="block h-1/4" @click="clicked = false">Home</a>
      <a href="#about" class="block h-1/4" @click="clicked = false">About Me</a>
      <a href="#projects" class="block h-1/4" @click="clicked = false">Projects</a>
      <a href="#contact" class="block h-1/4" @click="clicked = false">Contact</a>
    </div>
  </div>
</template>
