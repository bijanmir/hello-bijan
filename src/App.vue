<template>
  <!-- Navigation Goes Here -->
  <main-nav></main-nav>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainNav from './components/navigation/MainNav.vue'


export default defineComponent({
  components: {
    MainNav
  }
})
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
