<template>
  <section class="section full-height dark">
    <div class="container is-max-widescreen">
      <project-item
        v-for="project in projects"
        :key="project.projectName"
        :projectName="project.projectName"
        :url="project.url"
      >
      </project-item>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import ProjectItem from "./ProjectItem.vue";

export default defineComponent({
  components: {
    ProjectItem,
  },
  data() {
    return {
      projects: [
        {
          projectName: "Fine Transportation",
          url: "https://ft.hellobijan.com",
          img: "image/goes/here.png",
        },
        {
          projectName: "Tripper Island",
          url: "#",
          img: "image/goes/here.png",
        },
        {
          projectName: "AdMarketingPPC",
          url: "https://admarketingppc.com",
          img: "image/goes/here.png",
        },        {
          projectName: "WMS",
          url: "https://wmsmed.com",
          img: "image/goes/here.png",
        },        {
          projectName: "Fine Transportation",
          url: "https://hellobijan.com",
          img: "image/goes/here.png",
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

@media screen and (min-width: 600px) {
  .section {
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    background-color: #A6E3E9;
    margin: 0;
  }
}
</style>