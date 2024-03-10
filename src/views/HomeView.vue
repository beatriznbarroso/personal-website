<script setup lang="ts">
import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import devAnimation from '../assets/json/lottie.json'

let skills = ref({
  'css': 'proficient',
  'vue': 'proficient',
  'google-cloud': 'learning',
  'docker': 'intermediate',
  'html': 'proficient',
  'javascript': 'proficient',
  'mongo-db': 'learning',
  'python': 'learning',
  'php': 'proficient',
  'react': 'learning',
  'ruby-on-rails': 'intermediate',
  'ruby': 'intermediate',
  'tailwind': 'proficient',
  'typescript': 'intermediate',
})
</script>

<template>
  <main class="scroll-smooth">
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

      <div id="about" class="my-8">
        <div class="lg:flex">
          <div class="w-full">
            <h2 class="mb-4">About</h2>
            <p>
              Hello <span class="mx-2 animate-bounce">👋</span> My name is a Beatriz and I'm a self-made developer. Even though my traditional path did not start in Computer Science, I become fascinated by it after a workshop. I decided to do a bootcamp and worked as a Full Stack Developer ever since.
            </p>
          </div>
        </div>
      </div>

      <div class="my-8">
        <h2 class="mb-4">Skills</h2>
        <div 
          class="grid grid-cols-2 lg:grid-cols-6"
        >
          <div  v-for="(value, key, index) in skills" :key="index" >
            <img :src="`../assets/images/tech-stack/${key}.png`" :alt="key+' image'">
            {{ value }}
            {{ key }}
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
