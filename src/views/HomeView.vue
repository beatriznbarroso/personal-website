<template>
  <main>
    <div class="page">
      <div id="home" class="lg:flex lg:justify-stretch">
        <div class="w-1/2 text-6xl lg:text-8xl">
          <div class="flex flipping">
            <div
              v-for="(value, index) in 'Beatriz'"
              :key="index"
            >
              <span :style="'--i:'+index">{{value}}</span>
            </div>
          </div>
          <div class="flex flipping">
            <div
              v-for="(value, index) in 'Barroso'"
              :key="index"
            >
              <span :style="'--i:'+index">{{value}}</span>
            </div>
          </div>
        </div>
        <div>
         
        </div>
      </div>

      <div id="about" class="my-4">
        <h2>About</h2>
        <p>
          Hello <span>👋</span> My name is a Beatriz and I'm a self-made developer. Even though my traditional path did not start in Computer Science, I become fascinated by it after a workshop. I decided to do a bootcamp and worked as a Full Stack Developer ever since.
        </p>
      </div>

      <div id="projects" class="my-4">
        <h2>Projects</h2>
        <div>
          Goparity 
        </div>
        <div>
          Back office for stock management 
        </div>
      </div>

      <div id="skills" class="my-4">
        <h2>Skills</h2>

      </div>

      <div id="contact">
        <h2>Contact</h2>
        <a href="" class="icon"><img src="../assets/images/email-3d.png" alt="Email logo" class="w-14"></a>
        <a href="" class="icon"><img src="../assets/images/linkedin-3d.png" alt="Linkedin logo" class="w-14"></a>
        <a href="" class="icon"><img src="../assets/images/github-3d.webp" alt="Linkedin logo" class="w-16"></a>
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

