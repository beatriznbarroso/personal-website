<script setup lang="ts">
import { ref } from 'vue'

const projectsData = ref({
  name: 'goparity-website',
  techStack: ['vue', 'MySql']
})

</script>

<template>
  <div class="page">
    <div class="my-8">
      <h2 class="mb-4">Professional Work</h2>
      <div class="lg:grid lg:grid-cols-3">
        <ProjectsDetail v-for="(value, index) in projectsData" :key="index" :projectData="value" />
      </div>
    </div>

    <div id="personal-projects" class="my-8">
      <h2 class="mb-4">Personal projects</h2>
      <div class="lg:grid lg:grid-cols-2">
      </div>
    </div>
  </div>
</template>