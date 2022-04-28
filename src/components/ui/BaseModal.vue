<template>
<div v-if="isModalActive" class="modal ">
  <div class="modal-background"></div>
  <div class="modal-content">
    <h2>Hi from Modal</h2>
    <!-- Any other Bulma elements you want -->
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'


export default defineComponent({
    name: 'Modal',
    data(){
        return{
            isModalActive: false
        }
    },
    methods: {
        toggleModal(){
            this.isModalActive = !this.isModalActive;
        },
    }
})
</script>


<style>
  
</style>