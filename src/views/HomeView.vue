<template>
  <swiper 
    :direction="'vertical'" :autoplay="false" :slidesPerView="1" :mousewheel="true" :longSwipes="false"
    @swiper="setFirstSwiper" @slideChange="onSlideChange" :pagination="{
      clickable: true,
      dynamicBullets: true
    }" :modules="modules">
    <swiper-slide class="mt-8">
      <div class="page xl:grid xl:grid-cols-2 xl:justify-items-start h-fit">
        <div class="w-fit lg:pt-24">
          <div class="font-extrabold w-fit">
            <h3 style="font-family: Playfair, serif;"
              class="typing-effect typing-effect__line1 text-6xl md:text-9xl text-green-200">
              Beatriz
            </h3>
          </div>
          <div class="font-extrabold w-fit">
            <h3 style="font-family: Playfair, serif;"
              class="typing-effect typing-effect__line2 text-6xl md:text-9xl text-green-200 m-0 p-0">
              Barroso.
            </h3>
            <p class="font-extralight text-white tracking-widest text-2xl md:text-4xl mt-2">Full-Stack Developer</p>
          </div>
        </div>
        <div class="w-full">
          <div class="flex items-center justify-start xl:justify-end mt-2 lg:mt-0">
            <svg class="hidden xl:block w-32 animate-pulse" viewBox="0 0 210 80" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M192.125 58.2413C192.192 57.6167 192.752 57.1644 193.377 57.231C196.667 57.5819 199.545 57.2548 202.945 56.7976C202.942 56.7979 202.941 56.7981 202.941 56.7981C202.941 56.798 202.955 56.7958 202.996 56.7888L203.172 56.7587C203.317 56.7342 203.511 56.7018 203.733 56.6677C204.171 56.6004 204.739 56.5229 205.258 56.4872C205.516 56.4695 205.786 56.4602 206.035 56.4725C206.242 56.4827 206.59 56.512 206.905 56.6644C207.074 56.7459 207.353 56.9205 207.526 57.2657C207.718 57.6504 207.674 58.0347 207.568 58.3079C207.473 58.5517 207.323 58.7313 207.213 58.8456C207.095 58.9689 206.96 59.0802 206.823 59.1805C204.926 60.576 202.91 61.7866 200.924 62.953C200.68 63.0965 200.436 63.2392 200.193 63.3815C198.446 64.4047 196.736 65.4064 195.101 66.5097C194.909 66.6391 193.976 67.3372 193.084 68.0272C192.644 68.3671 192.233 68.6909 191.948 68.9263C191.848 69.0081 191.772 69.0723 191.719 69.1191C191.516 69.4006 191.188 69.5861 190.814 69.5921C190.707 69.5938 190.327 69.5872 189.999 69.2714C189.616 68.9011 189.633 68.4425 189.669 68.243C189.704 68.0519 189.78 67.9166 189.808 67.8688C189.844 67.8059 189.88 67.7578 189.902 67.7295C189.977 67.6327 190.063 67.5514 190.103 67.5142C190.207 67.4169 190.349 67.2958 190.502 67.1703C190.815 66.9126 191.247 66.572 191.692 66.2281C192.568 65.5504 193.564 64.803 193.829 64.6242C195.528 63.4772 197.306 62.4364 199.046 61.417C199.289 61.2748 199.531 61.1331 199.772 60.9916C200.835 60.3673 201.881 59.7449 202.899 59.0986C199.625 59.5345 196.599 59.8623 193.136 59.4928C192.511 59.4262 192.059 58.8659 192.125 58.2413ZM191.642 69.1894C191.642 69.1895 191.644 69.1879 191.647 69.1844C191.644 69.1876 191.642 69.1894 191.642 69.1894Z"
                fill="white" stroke="white" stroke-linecap="round"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M114.43 2.97243C116.799 5.09212 118.387 8.57955 118.626 11.6136C119.353 20.8227 114.274 30.3893 110.082 37.5959C106.752 43.3198 103.611 48.0292 99.5294 52.5712C101.02 57.4027 103.248 61.7107 106.222 65.2931C111.327 71.4422 118.694 75.5312 128.533 76.4329C148.657 78.2771 167.237 71.1229 185.832 63.9626C189.04 62.7276 192.248 61.4923 195.464 60.303C196.053 60.0852 196.707 60.3862 196.925 60.9754C197.143 61.5645 196.842 62.2187 196.253 62.4365C193.096 63.6039 189.927 64.8257 186.741 66.054C168.168 73.2145 149.025 80.595 128.325 78.698C117.92 77.7445 109.985 73.3864 104.472 66.7461C101.541 63.2164 99.3129 59.064 97.7547 54.4735C96.7891 55.4712 95.7697 56.4665 94.6845 57.4686C82.9357 68.3175 68.3983 71.6042 53.5183 65.2723C38.3935 58.8362 25.1024 47.5198 13.4406 36.456C8.51966 31.7874 4.35167 27.2421 1.13205 21.1509C0.83852 20.5956 1.05075 19.9074 1.60608 19.6139C2.16141 19.3204 2.84955 19.5326 3.14308 20.0879C6.19258 25.8573 10.1539 30.2024 15.0061 34.8058C26.6399 45.8429 39.6831 56.9129 54.409 63.1793C68.3846 69.1263 81.9831 66.101 93.1414 55.7974C94.524 54.5207 95.7963 53.2557 96.986 51.9807C96.0653 48.6755 95.4677 45.1732 95.1823 41.5364C94.7396 35.8933 94.7537 28.3549 96.0877 21.1916C97.4152 14.0631 100.087 7.1043 105.127 2.85747C106.751 1.4886 108.452 0.902528 110.12 1.01313C111.766 1.12224 113.23 1.89924 114.43 2.97243ZM98.8052 49.9497C98.1356 47.2197 97.6844 44.3451 97.45 41.3584C97.0177 35.8486 97.0367 28.52 98.3239 21.608C99.6176 14.6612 102.155 8.33627 106.592 4.59688C107.847 3.53943 108.985 3.21757 109.97 3.28282C110.976 3.34954 111.979 3.83217 112.913 4.66778C114.811 6.36568 116.161 9.29253 116.359 11.7926C117.022 20.1938 112.353 29.1675 108.115 36.4522C105.112 41.6154 102.295 45.8889 98.8052 49.9497Z"
                fill="white" stroke="white" stroke-linecap="round"></path>
            </svg>
            <a href="mailto:beatrizscnbarroso@gmail.com" target="_blank" class="mx-2 w-10 md:w-14">
              <img src="../assets/images/email.png" alt="Email logo">
            </a>
            <a href="https://www.linkedin.com/in/beatriz-barroso-031905124/" target="_blank" class="mx-2 w-10 md:w-14">
              <img src="../assets/images/linkedin.png" alt="Linkedin logo">
            </a>
            <a href="https://github.com/beatriznbarroso" target="_blank" class="mx-2 w-10 md:w-14">
              <img src="../assets/images/github.png" alt="Github logo">
            </a>
          </div>
          <div>
            <div class="w-96 md:w-140 lg:w-176 xl:w-96">
              <div class="relative">
                <img src="../assets/images/beatriz.png" alt="My photo"
                  class="rounded-[50%/60%_60%_60%_60%] drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)] opacity-40 my-photo bg-blend-hard-light">
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="page mt-4">
        <div class="xl:flex">
          <div class="w-full">
            <h2 class="about mb-4 md:mb-24 lg:mb-0" :class="reveal ? 'block' : 'hidden'">About <span
                class="lg:hidden about-me">Me</span></h2>
            <h2 class="hidden lg:block mb-8 about-me" :class="reveal ? 'block' : 'hidden'">Me</h2>
            <div class="grid grid-cols-1 xl:grid-cols-2 items-start">
              <div :class="{'reveal-text': reveal }" class="overflow-hidden">
                <p class="font-extralight text-sm md:text-2xl lg:text-3xl xl:text-lg">
                  Hello 👋 My name is a Beatriz and I'm a self-made developer.
                  <br />
                  I have always been a massive tech-geek and when I came across programming I knew I couldn't turn back.
                  <br />
                  I started in 2018 with workshops at SheCodes and then decided to do the LeWagon bootcamp in 2019.
                  I've been adapting and learning on the job constantly. From learning new languages, to understanding
                  servers or how to scale and
                  solve growth problems.
                  After 4 years on the job, I became the person in charge of tech department, becoming the ultimate
                  responsible person for the platform
                  as well dealing with the stakeholders, manage developers and QAs and still code.
                </p>
              </div>
              <img src="../assets/images/xero-code.gif" alt="Animation"
                class="!object-contain !h-2/5 xl:!h-3/6 overflow-hidden md:mt-20 lg:mt-32 xl:mt-[-70px] "
                :class="{ 'reveal-text': reveal }">
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="page">
        <h2 class="mb-4 md:mb-8">Skill Set</h2>
        <div
          class="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-7 gap-y-4 md:gap-y-8 lg:gap-y-16 xl:gap-y-8 gap-x-2 place-items-center">
          <div v-for="(value, key, index) in skills" :key="index" class="h-16 md:h-24">
            <img :src="value['grey_url']" class="!object-cover hover:scale-125 transition-transform"
              @mouseover="visible = index" @mouseout="visible = null">
            <div v-if="visible === index" class="mt-4">
              <p class="text-xs text-gray-100">skill level</p>
              <div class="meter my-1 rounded-r-lg">
                <span :style="'width:'+value['progress']+'%;'">
                  <span class="progress" :style="'background-color:' + value['color'] "></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <h2 class="ml-4 lg:ml-32 2xl:ml-64">Projects</h2>
        <div class="mt-16 md:mt-40 xl:mt-4">
          <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="3" :initialSlide="1"
            :spaceBetween="50" :loop="true" @swiper="setSecondSwiper" @slideChange="onSecondSwiperSlideChange"
            :autoHeight="true"
            :autoplay="{
              delay: 1500,
              disableOnInteraction: true,
            }" 
            :coverflowEffect="{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }" 
            :breakpoints=" { 
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20
              },
              1025: {
                slidesPerView: 2,
                spaceBetween: 50
              }
            }" :pagination="false" :modules="modules">
            <swiper-slide>
              <img src="../assets/images/goparity-website.png" alt="Goparity website" />
              <div :class="secondSwiperActiveIndex === 0 ? 'block': 'hidden'" class="mt-2">
                <p>
                  <a href="https://goparity.com/" class="link-hover" target="_blank">Goparity's public pages</a>
                  demonstrating the product, an impact investment crowdleding platform. This
                  frontend interacted with a REST API, optimized for a strong SEO.
                </p>
                <div class="flex justify-start mt-4 text-sm">
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2">Nuxt</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2">Tailwind CSS</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2">SCSS</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2">PWA</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/goparity-app.png" alt="Goparity app" />
              <div :class="secondSwiperActiveIndex === 1 ? 'block' : 'hidden'" class="mt-2">
                <a href="https://app.goparity.com/" class="link-hover" target="_blank">Goparity's</a> platform, allowing
                investors to have a virtual wallet, topping it up, invest in projects and
                receive the money back.
                Developed features such as automatic investment, implementing ETFs, authentication system and other
                financial instruments.
                <div class="flex justify-start mt-4 flex-wrap text-sm">
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2 mb-2">Vue</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2 mb-2">Tailwind CSS</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2 mb-2">SCSS</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2 mb-2">Typescript</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2 mb-2">MySQL</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2 mb-2">PHP</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2 mb-2">Laravel</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2 mb-2">REST API</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2 mb-2">Redis</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/bergue.png" alt="Bergue website" />
              <div :class="secondSwiperActiveIndex === 2 ? 'block' : 'hidden'" class="mt-2">
                Developed a stock management back office for <a href="https://www.berguejewelry.com/" class="link-hover"
                  target="_blank">Bergue</a> a jewelry shop located in Lisbon
                <div class="flex justify-start flex-wrap mt-4 text-sm">
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2 mb-2">PHP</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2 mb-2">Laravel</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2 mb-2">October CMS</div>
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2 mb-2">MySQL</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/tic-tac-toe.png" alt="Bergue website" />
              <div :class="secondSwiperActiveIndex === 3 ? 'block' : 'hidden'" class="mt-2">
                Developed a <a href="https://beatriznbarroso.github.io/tic-tac-toe/" class="link-hover"
                  target="_blank">Tic Tac Toe game</a> - a personal project - built in React in order to learn this new
                framework
                <div class="flex justify-start mt-4 text-sm">
                  <div class="bg-green-200 px-2 py-1 rounded-lg font-semibold mr-2">React</div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
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
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Mousewheel, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const visible = ref<number | null>(null)

    let skills = ref<object>({
      'html': {
        'grey_url': new URL("@/assets/images/tech-stack/html-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/html.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'css': {
        'grey_url': new URL("@/assets/images/tech-stack/css-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/css.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'tailwind': {
        'grey_url': new URL("@/assets/images/tech-stack/tailwind.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/tailwind.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'bootstrap': {
        'grey_url': new URL("@/assets/images/tech-stack/bootstrap-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/bootstrap.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'materialize': {
        'grey_url': new URL("@/assets/images/tech-stack/materialize-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/materialize.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'javascript': {
        'grey_url': new URL("@/assets/images/tech-stack/javascript-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/javascript.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'typescript': {
        'grey_url': new URL("@/assets/images/tech-stack/typescript-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/typescript.png", import.meta.url),
        'experience': 'intermediate',
        'progress': 70,
        'color': '#01C38D'
      },
      'vue': {
        'grey_url': new URL("@/assets/images/tech-stack/vue-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/vue.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'nuxt': {
        'grey_url': new URL("@/assets/images/tech-stack/nuxt-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/nuxt.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'react': {
        'grey_url': new URL("@/assets/images/tech-stack/react-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/react.png", import.meta.url),
        'experience': 'learning',
        'progress': 30,
        'color': '#01C38D'
      },
      'aws': {
        'grey_url': new URL("@/assets/images/tech-stack/aws-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/aws.png", import.meta.url),
        'experience': 'learning',
        'progress': 30,
        'color': '#01C38D'
      },
      'docker': {
        'grey_url': new URL("@/assets/images/tech-stack/docker-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/docker.png", import.meta.url),
        'experience': 'intermediate',
        'progress': 70,
        'color': '#01C38D'
      },
      'mysql': {
        'grey_url': new URL("@/assets/images/tech-stack/mysql-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/mysql.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'mongo-db': {
        'grey_url': new URL("@/assets/images/tech-stack/mongo-db-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/mongo-db.png", import.meta.url),
        'experience': 'learning',
        'progress': 30,
        'color': '#01C38D'
      },
      'redis': {
        'grey_url': new URL("@/assets/images/tech-stack/redis-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/redis.png", import.meta.url),
        'experience': 'intermediate',
        'progress': 70,
        'color': '#01C38D'
      },
      'python': {
        'grey_url': new URL("@/assets/images/tech-stack/python-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/python.png", import.meta.url),
        'experience': 'learning',
        'progress': 30,
        'color': '#01C38D'
      },
      'php': {
        'grey_url': new URL("@/assets/images/tech-stack/php-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/php.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'laravel': {
        'grey_url': new URL("@/assets/images/tech-stack/laravel-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/laravel.png", import.meta.url),
        'experience': 'proficient',
        'progress': 100,
        'color': '#01C38D'
      },
      'ruby': {
        'grey_url': new URL("@/assets/images/tech-stack/ruby-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/ruby.png", import.meta.url),
        'experience': 'intermediate',
        'progress': 70,
        'color': '#01C38D'
      },
      'ruby-on-rails': {
        'grey_url': new URL("@/assets/images/tech-stack/ruby-on-rails-grey.png", import.meta.url),
        'url': new URL("@/assets/images/tech-stack/ruby-on-rails.png", import.meta.url),
        'experience': 'intermediate',
        'progress': 70,
        'color': '#01C38D'
      },
    })

    const activeIndex = ref(0)
    const secondSwiperActiveIndex = ref(0)
    const reveal = ref(false)
    const revealDescription = ref(false)
    const revealConversationBox = ref(false)

    const setFirstSwiper = (swiper: any) => {
      activeIndex.value = swiper.activeIndex
    }

    const setSecondSwiper = (swiper: any) => {
      secondSwiperActiveIndex.value = swiper.activeIndex
    }

    const onSecondSwiperSlideChange = (swiper: any) => {
      secondSwiperActiveIndex.value = swiper.realIndex
    }

    const onSlideChange = (swiper: any) => {
      activeIndex.value = swiper.activeIndex
      if (activeIndex.value){
        reveal.value = true
      } 
      else {
        reveal.value = false
      }
    }
  
    return {
      modules: [EffectCoverflow, Mousewheel, Pagination],
      skills,
      visible,
      secondSwiperActiveIndex,
      setFirstSwiper,
      setSecondSwiper,
      onSlideChange,
      onSecondSwiperSlideChange,
      reveal,
      revealConversationBox,
      revealDescription
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

@media screen and (min-width: 1000px) {
  .about {
    animation: moveRight 2s;
    animation-fill-mode: forwards;
  }
  .about-me {
    animation: moveLeft 2s;
    animation-fill-mode: forwards;
  }
}

.about, .about-me {
  -webkit-text-stroke: 1px white;
}

.link-hover {
  text-underline-offset: 0.2em;
  text-decoration: underline 0.15em;
  transition: text-underline-offset 400ms;
}

.link-hover:hover, .link-hover:focus {
  text-underline-offset: 0.4em;
}

.reveal-text {
  display: hidden;
  animation: reveal 1.5s;
}

@keyframes reveal {
  0% {
    transform: translate(0, 100%);
  }

  100% {
    display: block;
    transform: translate(0, 0);
  }
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

@keyframes progressBar {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

@media (max-width: 700) {
  /* … */
}

@keyframes moveRight {
  from {
    margin-left: 0px;
  }

  to {
    margin-left: 30%;
  }
}

@keyframes moveLeft {
  from {
    margin-left: 100%;
  }

  to {
    margin-left: 40%;
  }
}
</style>
