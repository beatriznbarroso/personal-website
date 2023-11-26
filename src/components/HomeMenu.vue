<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  components: {
  }
})
</script>

<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="about">About me</RouterLink>
    <RouterLink to="work">Work</RouterLink>
    <RouterLink to="projects">Current Side Projects</RouterLink>
  </div>
</template>
