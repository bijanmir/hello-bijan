<template>
  <div class="card box">
    <div class="card-header-title">
      <h2>{{ this.projectName }}</h2>
    </div>
    <div class="card-content">
      <div class="content">
        <a :href="url">
          <button class="button is-success">Visit</button>
        </a>
      </div>
    </div>
  </div>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['projectName', 'url']
})
</script>

<style scoped>
.card{
  margin: 10px;
  min-width: 250px;
  background-color: #393E46 ;
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -10px;
height: fit-content;
}
</style>


