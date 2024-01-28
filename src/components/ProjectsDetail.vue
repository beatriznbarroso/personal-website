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
  <div>
    <div>
      <Transition name="slide-fade">
        <img v-if="projectData.name === 'goparity-website'" src="../assets/images/goparity-website.png" alt="Goparity Website">
        <img v-else-if="projectData.name === 'goparity-app'" src="../assets/images/goparity-app.png" alt="Goparity Website">
        <img v-else-if="projectData.name === 'bergue'" src="../assets/images/bergue.png" alt="Goparity Website">
      </Transition>
    </div>
  </div>
</template>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
