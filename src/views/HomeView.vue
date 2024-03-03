<script setup lang="ts">
import { ref } from 'vue'
import ProjectsDetail from '../components/ProjectsDetail.vue'
import { Vue3Lottie } from 'vue3-lottie'
import devAnimation from '../assets/json/lottie.json'

const projectData = ref({
  name: 'goparity-website',
  techStack: ['vue', 'MySql']
})

const projectsList = ref(['Goparity Website', 'Goparity App', 'Bergue'])

const changeProject = (project:string) => {
  projectData.value.name = project
  projectData.value.techStack = ['vue', 'MySql']
}
</script>

<template>
  <main>
    <div class="page">
      <div id="home" class="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
        <div class="w-1/2 text-6xl lg:text-8xl text-purple-700">
          <div class="flex flipping">
            <div
              v-for="(value, index) in 'Full-Stack'"
              :key="index"
            >
              <span :style="'--i:'+index">{{value}}</span>
            </div>
          </div>
          <div class="flex flipping">
            <div
              v-for="(value, index) in 'Developer'"
              :key="index"
            >
              <span :style="'--i:'+index">{{value}}</span>
            </div>
          </div>
        </div>
        <div>
          <Vue3Lottie :animationData="devAnimation" :height="400" :width="400" />
        </div>
      </div>

      <div id="projects" class="my-8">
        <h2 class="mb-4">Projects</h2>
        <div class="lg:grid lg:grid-cols-2">
          <ProjectsDetail 
            :projectData="projectData"
          />
          <div class="lg:place-self-center">
            <div v-for="(project, index) in projectsList" :key="index">
              <a class="block hover" @click="changeProject(project.toLowerCase().replace(/\s/g, '-'))">
                {{ project }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="about" class="my-8">
        <div class="lg:flex">
          <div class="w-full lg:w-1/2">
            <h2 class="mb-4">About</h2>
            <p>
              Hello <span class="mx-2 animate-bounce">👋</span> My name is a Beatriz and I'm a self-made developer. Even though my traditional path did not start in Computer Science, I become fascinated by it after a workshop. I decided to do a bootcamp and worked as a Full Stack Developer ever since.
            </p>
          </div>
          <div>
            <h2 class="mb-4">Skills</h2>

          </div>

        </div>
      </div>
      
      <div id="contact" class="lg:grid lg:grid-rows-1 lg:justify-items-end">
          <div class="flex items-center justify-evenly">
            <p class="mx-2">Contact me</p>
            <a href="mailto:beatrizscnbarroso@gmail.com" target="_blank" class="mx-2"><img src="../assets/images/email.png" alt="Email logo" class="w-10"></a>
            <a href="https://www.linkedin.com/in/beatriz-barroso-031905124/" target="_blank" class="mx-2"><img src="../assets/images/linkedin.png" alt="Linkedin logo" class="w-10"></a>
            <a href="https://github.com/beatriznbarroso" target="_blank" class="mx-2"><img src="../assets/images/github.png" alt="Linkedin logo" class="w-10"></a>
          </div>
        </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.flipping {
  position: relative;
}

.flipping div span {
  position: relative;
  display: inline-block;
  animation: flip 1s 1;
  animation-delay: calc(.2s * var(--i))
}

@keyframes flip {
  0%,80% {
    transform: rotateY(360deg) 
  }
}
</style>
