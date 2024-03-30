<script setup lang="ts">
import { ref } from 'vue'

const projectData = ref({
  name: 'goparity-website',
  techStack: ['vue', 'MySql']
})

const projectsList = ref(['Goparity Website', 'Goparity App', 'Bergue'])

const changeProject = (project: string) => {
  projectData.value.name = project
  projectData.value.techStack = ['vue', 'MySql']
}
</script>

<template>
  <div class="page">
    <div class="my-8">
      <h2 class="mb-4">Projects</h2>
      <div class="lg:grid lg:grid-cols-2">
        <ProjectsDetail 
          :projectData="projectData"
        />
        <div class="lg:place-self-center">
          <div v-for="(project, index) in projectsList" :key="index">
            <a class="block cursor-pointer" @click="changeProject(project.toLowerCase().replace(/\s/g, '-'))">
              {{ project }}
            </a>
          </div>
        </div>
      </div>
    </div>
  
    <div id="personal-projects" class="my-8">
      <h2 class="mb-4">Personal projects</h2>
      <div class="lg:grid lg:grid-cols-2">
        <div class="lg:place-self-center">
            <div v-for="(project, index) in projectsList" :key="index">
            <a class="block cursor-pointer" @click="changeProject(project.toLowerCase().replace(/\s/g, '-'))">
              {{ project }}
            </a>
          </div>
        </div>
        <ProjectsDetail 
          :projectData="projectData"
        />
      </div>
    </div>
  </div>
</template>