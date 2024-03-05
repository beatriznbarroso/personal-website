<script setup lang="ts">
withDefaults(defineProps<{
  projectData: {
    name?: string
    techStack?: Array<String>
  }
}>(), {
  // here we have default values
})
</script>

<template>
  <div class="relative h-64">
    <Transition name="slide-fade" class="absolute top-0 left-0">
      <img v-if="projectData.name === 'goparity-website'" class="h-64" src="../assets/images/goparity-website.png" alt="Goparity Website">
      <img v-else-if="projectData.name === 'goparity-app'" class="h-64" src="../assets/images/goparity-app.png" alt="Goparity App">
      <img v-else-if="projectData.name === 'bergue'" class="h-64" src="../assets/images/bergue.png" alt="Bergue">
    </Transition>
  </div>
</template>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: rotateY(180deg);
  opacity: 0;
}
</style>
