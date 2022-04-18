<template>
  <div class="card box">
    <div class="card-image"><img src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""></div>
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
import { defineComponent } from "vue";

export default defineComponent({
  props: ["projectName", "url"],
});
</script>

<style scoped>


.card {
  margin: 10px;
  min-width: 250px;
  max-width: 350px;
  background-color: #393e46;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
              rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -10px;
  height: fit-content;
  text-align: center;
}

.card-header-title{
  justify-content: center;
}
</style>


