<template>
  <section class="hero">
    <fire-fly></fire-fly>
    <div class="">
      <div class="hero-body">
        <div class="container">
          <h1>Hi, I'm Bijan</h1>

        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts"> 
import { defineComponent } from "vue";
import FireFly from "../components/ui/FireFlies.vue"

let w = window.innerWidth;
let h = window.innerHeight;

// console.log("width: ", w, "height: ", h);


export default defineComponent({
  name: "HomeView",
  components: {FireFly},
  computed: {
    hasHitLimit(){
      return w <  600;
    }
  },
  data(){
    return{
      window: {
        w: w,
        h: h
      }
    }
  }
});
</script>

<style lang="scss" scoped>

.right-chevron{
  float: right;
  font-size: 3rem;
  color: whitesmoke;

  &:hover{
    text-shadow: 1px 1px 10px khaki;
    transition: all 0.4s ease-in-out 0.1s;
  }

  &:not(:hover){
        text-shadow: 1px 1px 10px rgb(0, 68, 255);
    transition: all 0.4s ease-in-out 0.1s;
  }
}


.title,
.subtitle {
  color: whitesmoke;
}

.bg {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    rgb(229, 239, 193) 0%,
    rgba(162, 213, 171, 1) 25%,
    rgba(57, 174, 169, 1) 51%,
    rgba(85, 123, 131, 1) 100%
  );
  color: rgb(255, 211, 110);
  animation: AnimateBG 10s ease infinite;
}

@keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media screen and (min-width: 600px) {
  .bg {
    height: 100vh;
  }
}
</style>

