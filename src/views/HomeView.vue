<template>
  <section class="hero">
    <fire-fly></fire-fly>
    <div class="">
      <div class="hero-body">
        <div class="container">
          <h1 class="main-title">Hi, I'm Bijan</h1>
          <div class="module">
            <div class="columns">
              <div class="column">
                <img
                  class="profile-img box"
                  src="../assets/imgs/profile-img.jpeg"
                  alt=""
                />
              </div>
              <div class="column items">
                <ul>
                  <li class="item" v-for="item in aboutMe" :key="item">
                    {{ item }}
                  </li>
                </ul>
                <button class="button is-success">Hire Me</button>
                <button class="button">View CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FireFly from "../components/ui/FireFlies.vue";

// console.log("width: ", w, "height: ", h);

export default defineComponent({
  name: "HomeView",
  components: { FireFly },
  data() {
    return {
      aboutMe: [
        "Turned down a full-ride to MIT to pursue my passion of software engineering.",
        "I work with data.",
        "A lifelong learner and a techie at heart, I'm always looking for new challenges to tackle.",
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap");
.button{
  margin: 5px;
}


//ITEM
.items{
 display: flex;
 flex-direction: column;
}

.item {
  text-align: left;
  padding: 10px;
  &:hover {
    color: red;
    transition: all 0.5s ease-in-out;
  }
}

//PROFILE IMG
.profile-img {
  border-radius: 10%;
  width: 100%;
  max-width: 300px;
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

h1 {
  font-family: "Dancing Script", cursive;
}

h3 {
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
  .columns{
    display: flex;
  }
}
</style>

