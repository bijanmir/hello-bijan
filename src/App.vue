<template>
  <!-- Navigation Goes Here -->

<div class="columns main">
  <div class="column lf-side"> <main-nav></main-nav></div>
  <div class="column rt-side"><router-view v-slot="{ Component }">
  <transition>
    <component :is="Component" />
  </transition>
</router-view>
</div>
</div>


 


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



<style lang="scss" scoped>

.main{
  display: block;
  margin: 0;
}

.lf-side{
  position: relative;
  padding: 0;
}
.rt-side{
  position: relative;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>
