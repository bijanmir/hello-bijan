<template>
  <nav>
    <div class="logo-container">
      <a href="/"
        ><img class="logo" src="../../assets/imgs/ada_logo.png" alt=""
      /></a>
    </div>

    <div :class="isActive ? 'nav-menu is-active' : 'nav-menu'">
      <router-link v-for="route in routes[0]" :key="route" :to="route.route"
        ><i :class="route.icon"></i>
        <p>{{ route.name }}</p>
      </router-link>
    </div>
    <button
      @click="toggleActiveClass"
      id="navbarBurger"
      class="navbar-burger"
      data-target="navMenuDocumentation"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <!-- <h2>{{routes[0]}}</h2> -->
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isActive: false,
      routes: [
        {
          home: {
            route: `/`,
            name: `home`,
            icon: `fa-solid fa-home`,
          },
          projects: {
            route: `/projects`,
            name: `projects`,
            icon: `fa-solid fa-briefcase`,
          },
          contact: {
            route: `/contact`,
            name: `contact`,
            icon: `fa-solid fa-address-card`,
          },
        },
      ],
    };
  },
  methods: {
      toggleActiveClass(){
        this.isActive = !this.isActive;
      }
  }
});
</script>


<style lang="scss" scoped>
@import url("../../assets/scss/main.scss");

nav {
  background-color: rgb(3, 10, 41);
  display: flex;
  justify-content: space-between;
  height: 10.5vh;

  .logo {
    width: 10vw;
    animation: rotation 10s infinite linear;

  }

  .logo:hover{
    animation: rotation 5s infinite linear;
  }
  
  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

  .nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    height: 90vh;
    top: 10vh;
    left: 0;
    background-color: rgb(3, 10, 41);
    width: 100vw;
  }
.is-active{
    display: block;
}

}



@media only screen and (min-width: 600px) {
  nav {
    background-color: rgb(3, 10, 41);
    float: left;
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
    min-width: 10vw;
    .logo {
      width: 100px;
      margin-bottom: 20px;
    }

    .nav-menu {
      display: flex;
      position: inherit;
      width: auto;

      ul > li {
        color: white;
        margin: 10px auto;
      }

      ul > li:hover {
        color: rgb(17, 142, 224);
        cursor: pointer;
        font-size: 1.1rem;
      }
    }

      .navbar-burger{
      display: none;
  }
  }
}
</style>