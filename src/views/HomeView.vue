<script setup lang="ts">
import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import devAnimation from '../assets/json/lottie.json'

const visible = ref<number | null>(null)

let skills = ref<object>({
  'html': {
    'url': new URL("@/assets/images/tech-stack/html.png", import.meta.url),
    'experience': 'proficient',
    'progress': 100,
    'color': '#416D19'
  },
  'css': {
    'url': new URL("@/assets/images/tech-stack/css.png", import.meta.url),
    'experience': 'proficient',
    'progress': 100,
    'color': '#416D19'
  },
  'tailwind': {
    'url': new URL("@/assets/images/tech-stack/tailwind.png", import.meta.url),
    'experience': 'proficient',
    'progress': 100,
    'color': '#416D19'
  },
  'bootstrap': {
    'url': new URL("@/assets/images/tech-stack/bootstrap.png", import.meta.url),
    'experience': 'proficient',
    'progress': 100,
    'color': '#416D19'
  },
  'materialize': {
    'url': new URL("@/assets/images/tech-stack/materialize.png", import.meta.url),
    'experience': 'proficient',
    'progress': 100,
    'color': '#416D19'
  },
  'jquery': {
    'url': new URL("@/assets/images/tech-stack/jquery.png", import.meta.url),
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
  'typescript': {
    'url': new URL("@/assets/images/tech-stack/typescript.png", import.meta.url),
    'experience': 'intermediate',
    'progress': 70,
    'color': '#FFC374'
  },
  'vue': {
    'url': new URL("@/assets/images/tech-stack/vue.png", import.meta.url),
    'experience': 'proficient',
    'progress': 100,
    'color': '#416D19'
  },
  'nuxt': {
    'url': new URL("@/assets/images/tech-stack/nuxt.png", import.meta.url),
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
  'aws': {
    'url': new URL("@/assets/images/tech-stack/aws.png", import.meta.url),
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
  'mysql': {
    'url': new URL("@/assets/images/tech-stack/mysql.png", import.meta.url),
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
  'redis': {
    'url': new URL("@/assets/images/tech-stack/redis.png", import.meta.url),
    'experience': 'intermediate',
    'progress': 70,
    'color': '#FFC374'
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
  'laravel': {
    'url': new URL("@/assets/images/tech-stack/laravel.png", import.meta.url),
    'experience': 'proficient',
    'progress': 100,
    'color': '#416D19'
  },
  'ruby': {
    'url': new URL("@/assets/images/tech-stack/ruby.png", import.meta.url),
    'experience': 'intermediate',
    'progress': 70,
    'color': '#FFC374'
  },
  'ruby-on-rails': {
    'url': new URL("@/assets/images/tech-stack/ruby-on-rails.png", import.meta.url),
    'experience': 'intermediate',
    'progress': 70,
    'color': '#FFC374'
  },
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
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <p>
                  Hello 👋 My name is a Beatriz and I'm a self-made developer.
                </p>
                <br>
                <p>
                  So, picture this: I was knee-deep in the world of theatre, soaking up the drama and creativity, when I
                  stumbled upon a coding bootcamp. Crazy, right? But that's where the magic happened.
                </p>
                <br>
                <p>
                  Coding wasn't even on my radar, but once I dipped my toes into it, I was hooked. It was like
                  discovering
                  a whole new way to express myself, just with lines of code instead of lines on a stage.
                </p>
                <br>
                <p>
                  Fast forward a bit, and I found myself at Goparity, this awesome tech company with a mission I could
                  really get behind. For the past five years, I've been pouring my heart and soul into our work, from
                  coding to managing a team.
                </p>
                <br>
                <p>
                  Now, as the CTO, I'm juggling a bunch of responsibilities, but I'm still getting my hands dirty with
                  code. I mean, you can take the person out of coding, but you can't take coding out of the person,
                  right?
                </p>
                <br>
                <p>
                  I'm all about pushing boundaries and learning new stuff. With technology evolving faster than you can
                  say "bug fix," I'm constantly on the lookout for the next big thing.
                </p>
                <br>
                <p>
                  So yeah, that's my journey – from theatre buff to coding wizard. Who knows what's next? But I'm ready
                  for whatever comes my way.
                </p>
              </div>
              <div class="place-self-center mt-8 lg:mt-0">
                <img src="../assets/images/beatriz.png" alt="My photo"
                  class="rounded-[50%/60%_60%_60%_60%] drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)]">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="my-8">
        <h2 class="mb-8">Skill Set</h2>
        <div class="grid grid-cols-2 lg:grid-cols-8 gap-y-8 gap-x-2 place-items-center">
          <div v-for="(value, key, index) in skills" :key="index" class="h-24">
            <img :src="value.url" class="h-14 hover:scale-125 transition-transform"
              @mouseover="visible = index" @mouseout="visible = null">
            <div v-if="visible === index" class="mt-4">
              <p class="text-xs text-gray-100">skill level</p>
              <div class="meter my-1 rounded-r-lg">
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
            <img src="../assets/images/email.png" alt="Email logo" class="h-10">
          </a>
          <a href="https://www.linkedin.com/in/beatriz-barroso-031905124/" target="_blank" class="mx-2">
            <img src="../assets/images/linkedin.png" alt="Linkedin logo" class="h-10">
          </a>
          <a href="https://github.com/beatriznbarroso" target="_blank" class="mx-2">
            <img src="../assets/images/github.png" alt="Github logo" class="h-10">
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
  animation: progressBar 1s ease-in-out;
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
