<template>
  <main>
    <div class="page">
      <div id="home" class="lg:flex lg:justify-stretch">
        <div class="w-1/2 text-8xl">
          <span>Beatriz</span>
          <br>
          <span>Barroso</span>
        </div>
        <div class="icon-container">
          <a href="" class="icon"><img src="../assets/images/email-3d.png" alt="Email logo" class="w-14"></a>
          <a href="" class="icon"><img src="../assets/images/linkedin-3d.png" alt="Linkedin logo" class="w-14"></a>
          <a href="" class="icon"><img src="../assets/images/github-3d.webp" alt="Linkedin logo" class="w-16"></a>
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
      </div>

      <div id="skills" class="my-4">
        <h2>Skills</h2>
      </div>
    </div>
  </main>
</template>

<style>
.icon-container {
  position: relative;
  width: 200px;
  height: 200px;
  animation: spin 10s linear infinite;
}

.icon {
  position: absolute;
  cursor: pointer;
}

.icon:nth-child(2) {
  right: 66px;
}

.icon:nth-child(3) {
  right: 99px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
