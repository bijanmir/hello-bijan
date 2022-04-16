<template>
    <section class="section bg">
        <slot></slot>
    </section>
</template>


<style scoped>
.bg {
  width: 100%;
  height: 90vh;

  background-color: #444;



    /* background-image: linear-gradient(
        -45deg, 
        rgba(59,173,227,1) 0%, 
        rgba(87,111,230,1) 25%, 
        rgba(152,68,183,1) 51%, 
        rgba(255,53,127,1) 100%
  );  
   */

}


@media screen and (min-width:600px) {
    .bg{
      height: 100vh;
    }
}
</style>

