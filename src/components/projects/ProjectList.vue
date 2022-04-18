<template>
  
  <section class="section full-height dark">
    <h1 class="is-size-1 title has-text-centered test">Projects</h1>
    <div class="container is-max-widescreen">

      <project-item2         
        v-for="project in projects"
        :key="project.projectName"
        :message="project.projectName"
        :imgSrc="project.img"
        :url="project.url">
        
        </project-item2>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";
// import ProjectItem from "./ProjectItem.vue";
import ProjectItem2 from "./ProjectItem2.vue"

export default defineComponent({
  components: {
    // ProjectItem,
    ProjectItem2
  },
  data() {
    return {
      projects: [
        {
          projectName: "Fine Transportation",
          url: "http://ft.hellobijan.com",
          img: "https://alphazug.com/wp-content/uploads/2019/04/Limousine-cheuffeur-1024x720.jpg",
        },
        {
          projectName: "Tripper Island",
          url: "#",
          img: "https://images.unsplash.com/photo-1610483463656-9680e071d8c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        {
          projectName: "AdMarketingPPC",
          url: "https://admarketingppc.com",
          img: "https://images.unsplash.com/photo-1616499452581-cc7f8e3dd3c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },        {
          projectName: "WMS",
          url: "https://wmsmed.com",
          img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },        {
          projectName: "Fine Transportation",
          url: "http://hellobijan.com",
          img: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        ],
    };
  },
});
</script>

<style scoped lang="scss">

.is-max-widescreen{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
}

@media screen and (min-width: 800px) {

}
</style>