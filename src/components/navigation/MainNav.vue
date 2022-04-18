<template>
  <nav id="nav-bar">
    <div class="logo-container">
      <a href="/"
        ><img class="logo" src="../../assets/imgs/ada_logo.png" alt=""
      /></a>
    </div>

    <div id="nav-menu" :class="navMenuClass">
      <label class="switch">
        <input @click="toggleNightMode" type="checkbox" />
        <span class="slider round"></span>
      </label>

      <div class="social-media">
        <a target="_blank" rel="noreferrer" href="https://github.com/bijanmir">
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/bijanmir/"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
      </div>

      <ul>
        <li v-for="route in routes[0]" :key="route" :class="route.name">
          <router-link @click="toggleActiveClass" :to="route.route"
            ><i :class="route.icon"></i
          ></router-link>
        </li>
      </ul>
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
  computed:{
    navMenuClass(){
      if(this.isActive && this.darkMode){
        return "nav-menu is-active dark-bg-1"
      }else if(this.isActive && !this.darkMode){
        return "nav-menu is-active"
      }else if(this.darkMode && !this.isActive){
        return "nav-menu dark-bg-1"
      }else {
        return "nav-menu"
      }
    }
  },
  data() {
    return {
      isActive: false,
      darkMode: false,
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
    toggleActiveClass() {
      this.isActive = !this.isActive;
    },
    toggleNightMode(){
      this.darkMode = !this.darkMode;
      const allH1H2P = document.querySelectorAll("h1, h2,p");
      const navBar = document.getElementById('nav-bar');
      const navMenu = document.getElementById('nav-menu');
      const html = document.querySelector('html');
      
      if(this.darkMode == false){
        navBar?.classList.remove('dark-bg-1')
        navMenu?.classList.remove('dark-bg-1')
        html?.classList.remove('dark-bg-2')
        

        for(let i = 0; i < allH1H2P.length; ++i){
        allH1H2P[i].classList.remove('dark-text-1')
      }
      }else{

        navBar?.classList.add('dark-bg-1')
        navMenu?.classList.add('dark-bg-1')
        html?.classList.add('dark-bg-2')

        for(let i = 0; i < allH1H2P.length; ++i){
        allH1H2P[i].classList.add('dark-text-1')
      }
      }
      

    }
  },
});
</script>


<style lang="scss" scoped>
// @import url("../../assets/scss/main.scss");
$third-color: #581C0C;

$primary-color: #eeeeee;
$secondary-color: #25baff;
$third-color: #db6e14;
$fourth-color: #4D96FF;

nav {
  background-color: $primary-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 1rem;

  a {
    &.router-link-exact-active {
      color: $third-color;
    }
  }

  .logo-container {
    z-index: 100;
  }

  .logo {
    width: 10vw;
    animation: rotation 10s infinite linear;
  }

  .logo:hover {
    animation: rotation 5s infinite linear;
  }

  .social-media > a {
    padding: 10px;
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
    background-color: $primary-color;
    padding: 20px 0;
    flex-direction: column;
    align-items: center;
    position: absolute;
    height: 90vh;
    top: 10vh;
    left: 0;
    width: 100vw;
    z-index: 20;
    font-size: 2rem;
  }
  .is-active {
    display: flex;
  }
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: $secondary-color;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@media only screen and (min-width: 800px) {
  nav {
    float: left;
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
    width: 10vw;

    a {
      font-size: 1.5rem;
      color: $secondary-color;
      display: block;
      line-height: 51px;
      position: relative;
      text-decoration: none;

      i {
        transition: all 0.8s ease-out;
      }

    }
    .logo {
      width: 100px;
      margin-bottom: 20px;
    }

    .nav-menu {
      display: flex;
      position: relative;
      width: auto;


    }

    .social-media {
      display: flex;
      justify-content: space-around;

      i {
        font-size: 1.2rem;
      }
    }

    .navbar-burger {
      display: none;
    }
  }
}
</style>