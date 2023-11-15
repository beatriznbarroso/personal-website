<template>
  <div class="absolute bottom-0 left-0">
  </div>
</template>

<style>
.curve {
  width: 500px;
  height: 100px;
  border: solid 5px #000;
  border-color: transparent transparent #000 transparent;
  border-radius: 0 0 240px 50%/60px;
}
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(async() => {
  const { default: P5 } = await import('p5')

  const sketch = (s) => {
    s.setup = () => {
      s.createCanvas(500, 500)
    }
    s.draw = () => {
      s.background(33, 33, 33)
    }
  }
  // eslint-disable-next-line no-unused-vars
  const canvas = new P5(sketch, 'p5Canvas')

  return {canvas}
})
</script>
