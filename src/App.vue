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



<style lang="scss">
// DARK MODE COLORS

.dark-text-1 {
  color: rgb(41, 162, 179) !important;
}

// .dark-bg-1{
//   background-color: #232323 !important;
// }

.dark-bg-1{
  background-color: $primary !important;
}

.dark-bg-2{
  background-color: #2f2f2f !important;
}















//END DARK MODE



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

@media screen and (min-width: 769px)
{
  .columns:not(.is-desktop){
    display: block;
  }
}

@media screen and (min-width: 800px) {
  .lf-side{
    position: fixed;

  }

  .rt-side{
    margin-left: 10vw;
}
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}




</style>
