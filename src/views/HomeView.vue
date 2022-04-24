<template>
  <section class="hero">
    <fire-fly></fire-fly>
    <div class="">
      <div class="hero-body">
        <div class="container">
          <h1 class="main-title">Hi, I'm Bijan</h1>
          <h3 class="is-size-4">A Software Engineer</h3>
          <div class="module">
            <ul>
              <li>Software Engineer</li>
              <li>Entrepreneur</li>
              <li>Surfer</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FireFly from "../components/ui/FireFlies.vue";

let w = window.innerWidth;
let h = window.innerHeight;

// console.log("width: ", w, "height: ", h);

export default defineComponent({
  name: "HomeView",
  components: { FireFly },
  computed: {
    hasHitLimit() {
      return w < 600;
    },
  },
  data() {
    return {
      window: {
        w: w,
        h: h,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap");


.box {
  background: #111;
  position: relative;
  height: 200px;
  display: flex;
  align-self: center;
  width: 100%;
  overflow: hidden;
}
.box::before {
  content: "";
  background: #111;
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.075) 0%, #111 60%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: bg-swing 2s ease-in-out 2s infinite alternate;
}

@keyframes bg-swing {
  from {
    transform: translate3d(-5%, 0, 0);
  }
  to {
    transform: translate3d(5%, 0, 0);
  }
}
.bulb-wire {
  position: absolute;
  left: 50%;
  height: 65px;
  width: 0;
  border-left: 1px solid #000;
  transform: rotate(45deg);
  transform-origin: 0 0;
  animation: bulb-swing 2s ease-in-out 2s infinite alternate;
}

@keyframes bulb-swing {
  from {
    transform: rotate(55deg);
  }
  to {
    transform: rotate(-55deg);
  }
}
.fa-lightbulb-o {
  position: absolute;
  left: -7px;
  bottom: -20px;
  font-size: 25px;
  transform: rotate(180deg);
}
.fa-lightbulb-o::after {
  content: "";
  display: block;
  position: absolute;
  background: yellow;
  width: 10px;
  height: 10px;
  border-radius: 100%;
    top: 12px;
    left: -12px;
  z-index: -1;
}

.bulb-glow {
  background: yellow;
  background: radial-gradient(ellipse at center, rgba(255, 255, 0, 0.5) 0%, rgba(255, 255, 0, 0) 60%);
  width: 100px;
  height: 100px;
  bottom: -60px;
  left: 50%;
  margin-left: -50px;
  position: absolute;
  border-radius: 100%;
  z-index: -1;
  opacity: 0.25;
  animation: bulb-light 2s ease-in-out 2s infinite alternate;
}

@keyframes bulb-light {
  from {
    background-color: rgba(255, 255, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0);
  }
}
.noir,
.noir span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 380px;
  margin-left: -190px;
  text-align: center;
  text-transform: uppercase;
  font-size: 50px;
  height: 150px;
  line-height: 166px;
  margin-top: -75px;
  perspective: 1000px;
}

.noir span::before {
  content: "Welcome";
  padding: 50px;
  transform: scaleY(-0.25) skew(20deg);
  opacity: 0.25;
  background: linear-gradient(#111 0%, #000 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  text-shadow: 0 0 10px #000;
  top: 10px;
  left: 10px;
  animation: text-shadow 2s linear 2s infinite alternate;
}

@keyframes text-shadow {
  0% {
    transform: scaleY(-0.25) skew(-20deg);
    left: 40px;
  }
  100% {
    transform: scaleY(-0.25) skew(20deg);
    left: 0px;
  }
}




//HERO STYLE
.hero {

  display: flex;
  flex-direction: column;

}

.hero-body .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

//END HERO STYLE

h1{ 
  font-family: "Dancing Script", cursive;
}

h3{
  color: rgba(0, 157, 255, 0.801);
}

.right-chevron {
  float: right;
  font-size: 3rem;
  color: whitesmoke;

  &:hover {
    text-shadow: 1px 1px 10px khaki;
    transition: all 0.4s ease-in-out 0.1s;
  }

  &:not(:hover) {
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

