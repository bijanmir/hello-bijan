<template>
<div class="container">
  <h2>hi</h2>
  <div class="sliding-background"></div>
</div>
</template>

<style scoped>
.container {
  overflow: hidden;
}

.sliding-background {
  background: url("assets/imgs/abs.svg") repeat-x;
  height: 560px;
  width: 5076px;
  animation: slide 60s linear infinite;
}

@keyframes slide{
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1692px, 0, 0);
  }
}
</style>