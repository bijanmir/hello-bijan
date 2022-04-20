<template>
 <div class="module">
     <slot></slot>
</div>   
</template>

<style scoped>
.module {
  max-width: 400px;
  padding: 3rem;
  background: #f06d06;
  --notchSize: 20px;
  -webkit-clip-path: polygon(0% var(--notchSize), var(--notchSize) 0%, calc(100% - var(--notchSize)) 0%, 100% var(--notchSize), 100% calc(100% - var(--notchSize)), calc(100% - var(--notchSize)) 100%, var(--notchSize) 100%, 0% calc(100% - var(--notchSize)));
          clip-path: polygon(0% var(--notchSize), var(--notchSize) 0%, calc(100% - var(--notchSize)) 0%, 100% var(--notchSize), 100% calc(100% - var(--notchSize)), calc(100% - var(--notchSize)) 100%, var(--notchSize) 100%, 0% calc(100% - var(--notchSize)));
}
</style>