<script setup lang="ts">
import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import devAnimation from '../assets/json/lottie.json'

const visible = ref(null)
let skills = ref({
  'css': {
    'url': new URL("@/assets/images/tech-stack/css.png", import.meta.url),
    'experience': 'proficient',
    'progress': 100,
    'color': '#416D19'
  },
  'vue': {
    'url': new URL("@/assets/images/tech-stack/vue.png", import.meta.url),
    'experience': 'proficient',
    'progress': 100,
    'color': '#416D19'
  },
  'google-cloud': {
    'url': new URL("@/assets/images/tech-stack/google-cloud.png", import.meta.url),
    'experience': 'learning',
    'progress': 30,
    'color': '#F9E897'
  },
  'docker': {
    'url': new URL("@/assets/images/tech-stack/docker.png", import.meta.url),
    'experience': 'intermediate',
    'progress': 70,
    'color': '#FFC374'
  },
  'html': {
    'url': new URL("@/assets/images/tech-stack/html.png", import.meta.url),
    'experience': 'proficient',
    'progress': 100,
    'color': '#416D19'
  },
  'javascript': {
    'url': new URL("@/assets/images/tech-stack/javascript.png", import.meta.url),
    'experience': 'proficient',
    'progress': 100,
    'color': '#416D19'
  },
  'mongo-db': {
    'url': new URL("@/assets/images/tech-stack/mongo-db.png", import.meta.url),
    'experience': 'learning',
    'progress': 30,
    'color': '#F9E897'
  },
  'python': {
    'url': new URL("@/assets/images/tech-stack/python.png", import.meta.url),
    'experience': 'learning',
    'progress': 30,
    'color': '#F9E897'
  },
  'php': {
    'url': new URL("@/assets/images/tech-stack/php.png", import.meta.url),
    'experience': 'proficient',
    'progress': 100,
    'color': '#416D19'
  },
  'react': {
    'url': new URL("@/assets/images/tech-stack/react.png", import.meta.url),
    'experience': 'learning',
    'progress': 30,
    'color': '#F9E897'
  },
  'ruby-on-rails': {
    'url': new URL("@/assets/images/tech-stack/ruby-on-rails.png", import.meta.url),
    'experience': 'intermediate',
    'progress': 70,
    'color': '#FFC374'
  },
  'ruby': {
    'url': new URL("@/assets/images/tech-stack/ruby.png", import.meta.url),
    'experience': 'intermediate',
    'progress': 70,
    'color': '#FFC374'
  },
  'tailwind': {
    'url': new URL("@/assets/images/tech-stack/tailwind.png", import.meta.url),
    'experience': 'proficient',
    'progress': 100,
    'color': '#416D19'
  },
  'typescript': {
    'url': new URL("@/assets/images/tech-stack/typescript.png", import.meta.url),
    'experience': 'intermediate',
    'progress': 70,
    'color': '#FFC374'
  }
})

</script>

<template>
  <main class="scroll-smooth">
    <div class="page">
      <div id="home" class="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
        <div class="w-1/2 text-6xl lg:text-8xl text-purple-700">
          <div class="flex flipping">
            <div v-for="(value, index) in 'Full-Stack'" :key="index">
              <span :style="'--i:'+index">{{value}}</span>
            </div>
          </div>
          <div class="flex flipping">
            <div v-for="(value, index) in 'Developer'" :key="index">
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
              Hello <span class="mx-2 animate-bounce">👋</span> My name is a Beatriz and I'm a self-made developer. Even
              though my traditional path did not start in Computer Science, I become fascinated by it after a workshop.
              I decided to do a bootcamp and worked as a Full Stack Developer ever since.
            </p>
          </div>
        </div>
      </div>

      <div class="my-8">
        <h2 class="mb-4">Skills</h2>
        <div class="grid grid-cols-2 lg:grid-cols-8 gap-y-2 gap-x-2 place-items-center">
          <div v-for="(value, key, index) in skills" :key="index">
            <img :src="value.url" class="h-12" @mouseover="visible = index" @mouseout="visible = null">
            <div v-if="visible === index" class="mt-6">
              <p class="text-xs">skill Level</p>
              <div class="meter my-2">
                <span :style="'width:'+value.progress+'%;'">
                  <span class="progress" :style="'background-color:' + value.color "></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" class="lg:grid lg:grid-rows-1 lg:justify-items-end">
        <div class="flex items-center justify-evenly">
          <p class="mx-2">Contact me</p>
          <a href="mailto:beatrizscnbarroso@gmail.com" target="_blank" class="mx-2">
            <img src="../assets/images/email.png" alt="Email logo" class="w-10">
          </a>
          <a href="https://www.linkedin.com/in/beatriz-barroso-031905124/" target="_blank" class="mx-2">
            <img src="../assets/images/linkedin.png" alt="Linkedin logo" class="w-10">
          </a>
          <a href="https://github.com/beatriznbarroso" target="_blank" class="mx-2">
            <img src="../assets/images/github.png" alt="Linkedin logo" class="w-10">
          </a>
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

.meter {
  height: 5px;
  position: relative;
  background: #f3efe6;
  overflow: hidden;
}

.meter span {
  display: block;
  height: 100%;
}

.progress {
  background-color: #e4c465;
  animation: progressBar 3s ease-in-out;
  animation-fill-mode: both;
}

@keyframes progressBar {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

</style>
