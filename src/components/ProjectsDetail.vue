<script setup lang="ts">
import { ref } from 'vue'

const visible = ref<boolean>(true)

</script>

<template>
  <div class="">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <img src="src/assets/images/goparity-app.png" alt="Goparity App" class="w-96">
      <div>
        <p>
          Goparity app is an impact investment platform. I was the lead collaborator in this project, developed
          alongside 3 other developers.
          Developed a REST API built in Laravel, allowing users to top up virtual wallets, invest in projects and
          receive their money back with interest.
          Scaled up this platform from 1500 users to 50 000 and with over 35 million euros invested.
        </p>
        <Transition name="fade">
          <div v-if="visible"
            class="border border-yellow-500 px-2 py-1 w-fit rounded-full my-2 text-sm transition ease-in-out delay-150">
            <span class="text-yellow-500">VueJs</span>
          </div>
        </Transition>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  background-color: #F0BB41;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
