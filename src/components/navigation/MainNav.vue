<template>
  <nav>
    <div class="logo-container">
      <a href="/"
        ><img class="logo" src="../../assets/imgs/ada_logo.png" alt=""
      /></a>
    </div>

    <div :class="isActive ? 'nav-menu is-active' : 'nav-menu'">
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
    toggleActiveClass() {
      this.isActive = !this.isActive;
    },
  },
});
</script>


<style lang="scss" scoped>
@import url("../../assets/scss/main.scss");
$nav-color: #222831;


nav {
  background-color: $nav-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 1rem;


  .logo {
    width: 10vw;
    animation: rotation 10s infinite linear;
  }

  .logo:hover {
    animation: rotation 5s infinite linear;
  }

  .social-media > a{
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
    background-color: $nav-color;
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
    transition: all 0.3s ease-out;
  }
}

@media only screen and (min-width: 600px) {
  nav {
    float: left;
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
    min-width: 10vw;

    a {
      font-size: 1.5rem;
      color: #CBF1F5;
      display: block;
      line-height: 51px;
      position: relative;
      text-decoration: none;

      i {
        transition: all 0.3s ease-out;
      }

      &:hover {
        color: gold;

        // i {
        //   opacity: 0;
        // }

        &::after {
          opacity: 1;
        }
      }

    //   &:after {
    //     content: "";
    //     font-size: 9px;
    //     letter-spacing: 2px;
    //     position: absolute;
    //     bottom: 0;
    //     display: block;
    //     width: 100%;
    //     text-align: center;
    //     opacity: 0;
    //     transition: all 0.4s ease-out;
    //   }
    
    }
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