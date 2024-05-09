<template>
  <swiper
    :direction="'vertical'"
    :autoplay="false"
    :slidesPerView="1"
    :spaceBetween="10"
    :mousewheel="true"
    :pagination="{
      clickable: true,
      dynamicBullets: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="mt-8"> 
      <div class="page lg:grid lg:grid-cols-2 lg:justify-items-start h-fit">
        <div class="w-fit">
          <div class="font-extrabold w-fit">
            <h3 style="font-family: Playfair, serif;"
              class="typing-effect typing-effect__line1 text-6xl lg:text-9xl text-green-200">
              Beatriz
            </h3>
          </div>
          <div class="font-extrabold">
            <h3 style="font-family: Playfair, serif;"
              class="typing-effect typing-effect__line2 text-6xl lg:text-9xl text-green-200 m-0 p-0">
              Barroso.
            </h3>
            <p class="font-extralight text-white tracking-widest text-2xl mt-2">Full-Stack Developer</p>
          </div>
        </div>
        <div class="place-self-center">
          <div class="relative w-full">
            <div>
              <img src="../assets/images/beatriz.png" alt="My photo"
                class="rounded-[50%/60%_60%_60%_60%] drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)] opacity-20">
            </div>
            <div class="absolute bg-green-200 h-12 top-1/2 w-full rotate-45 opacity-30"></div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="page mt-4">
        <div class="lg:flex">
          <div class="w-full">
            <h2 class="mb-4">About</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 font-extralight">
              <div>
                <p>
                  Hello 👋 My name is a Beatriz and I'm a self-made developer.
                </p>
                <br>
              </div>
              <div class="place-self-center lg:mt-0">

              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="page">
        <h2 class="mb-8">Skill Set</h2>
        <div class="grid grid-cols-2 lg:grid-cols-7 gap-y-8 gap-x-2 place-items-center">
          <div v-for="(value, key, index) in skills" :key="index" class="h-24">
            <img :src="value.url" class="h-14 hover:scale-125 transition-transform" @mouseover="visible = index"
              @mouseout="visible = null">
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
    </swiper-slide>
    <swiper-slide>
      <div class="page">
        <h2 class="mb-8">Projects</h2>
       
      </div>
    </swiper-slide>
    <swiper-slide>
      <div id="contact" class="lg:grid lg:grid-rows-1 lg:justify-items-center page">
        <h3 class="m-2">Looking forward to hearing from you!</h3>
        <div class="flex items-center justify-center">
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
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const visible = ref<number | null>(null)

    let skills = ref<object>({
      'html': {
        'url': new URL("@/assets/images/tech-stack/html.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'css': {
        'url': new URL("@/assets/images/tech-stack/css.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'tailwind': {
        'url': new URL("@/assets/images/tech-stack/tailwind.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'bootstrap': {
        'url': new URL("@/assets/images/tech-stack/bootstrap.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'materialize': {
        'url': new URL("@/assets/images/tech-stack/materialize.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'jquery': {
        'url': new URL("@/assets/images/tech-stack/jquery.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'javascript': {
        'url': new URL("@/assets/images/tech-stack/javascript.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'typescript': {
        'url': new URL("@/assets/images/tech-stack/typescript.png", import.meta.url),
        'experience': 'intermediate',
        'progress': 70,
        'color': '#01C38D'
      },
      'vue': {
        'url': new URL("@/assets/images/tech-stack/vue.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'nuxt': {
        'url': new URL("@/assets/images/tech-stack/nuxt.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'react': {
        'url': new URL("@/assets/images/tech-stack/react.png", import.meta.url),
        'experience': 'learning',
        'progress': 30,
        'color': '#01C38D'
      },
      'aws': {
        'url': new URL("@/assets/images/tech-stack/aws.png", import.meta.url),
        'experience': 'learning',
        'progress': 30,
        'color': '#01C38D'
      },
      'docker': {
        'url': new URL("@/assets/images/tech-stack/docker.png", import.meta.url),
        'experience': 'intermediate',
        'progress': 70,
        'color': '#01C38D'
      },
      'mysql': {
        'url': new URL("@/assets/images/tech-stack/mysql.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'mongo-db': {
        'url': new URL("@/assets/images/tech-stack/mongo-db.png", import.meta.url),
        'experience': 'learning',
        'progress': 30,
        'color': '#01C38D'
      },
      'redis': {
        'url': new URL("@/assets/images/tech-stack/redis.png", import.meta.url),
        'experience': 'intermediate',
        'progress': 70,
        'color': '#01C38D'
      },
      'python': {
        'url': new URL("@/assets/images/tech-stack/python.png", import.meta.url),
        'experience': 'learning',
        'progress': 30,
        'color': '#01C38D'
      },
      'php': {
        'url': new URL("@/assets/images/tech-stack/php.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'laravel': {
        'url': new URL("@/assets/images/tech-stack/laravel.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'ruby': {
        'url': new URL("@/assets/images/tech-stack/ruby.png", import.meta.url),
        'experience': 'intermediate',
        'progress': 70,
        'color': '#01C38D'
      },
      'ruby-on-rails': {
        'url': new URL("@/assets/images/tech-stack/ruby-on-rails.png", import.meta.url),
        'experience': 'intermediate',
        'progress': 70,
        'color': '#01C38D'
      },
    })


    return {
      modules: [Mousewheel, Pagination ],
      skills,
      visible
    };
  },
};
</script>

<style lang="scss" scoped>
.typing-effect {
  width: 0;
  overflow: hidden;
  border-right: 2px solid transparent;
  white-space: nowrap;
}

.typing-effect__line1 {
  animation: typing 2s steps(30, end) forwards, blink-caret 1s 2;
}

.typing-effect__line2 {
  animation: typing 2s steps(30, end) forwards, blink-caret 1s infinite;
  animation-delay: 2s;
}

@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: #01C38D
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
