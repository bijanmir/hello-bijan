<template>
  
  <section class="section full-height dark">
    <h1 class="is-size-1 title has-text-centered test">Projects</h1>
    <div class="container is-max-widescreen">

      <project-item2         
        v-for="project in projects"
        :key="project.projectName"
        :message="project.projectName"
        :imgSrc="project.img"
        :url="project.url"
        :description="project.desc">
        
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
          projectName: "Nokia",
          url: "https://www.nokia.com/",
          img: "https://cwpwp2.betterthanpaper.com/wp-content/uploads/2017/04/nokia-logo.jpg",
          desc: 'Technology leader across mobile, fixed and cloud networks, our solutions enable a more productive, sustainable and inclusive world.'
        },
        {
          projectName: "Arrow",
          url: "https://www.arrow.com/",
          img: "https://cdn.phenompeople.com/CareerConnectResources/ARELUS/en_us/common/image_gallery/Arrow%20-%20The%20Ultimate%20Technology%20Enabler-1559762138562.png",
          desc: 'American Fortune 500 company headquartered in Centennial, Colorado. The company specializes in distribution and value added services relating to electronic components and computer products'
        },
        {
          projectName: "Fine Transportation",
          url: "http://ft.hellobijan.com",
          img: "https://alphazug.com/wp-content/uploads/2019/04/Limousine-cheuffeur-1024x720.jpg",
          desc: 'One of the Best Executive Luxury Chauffeur Driven Car Service in Middletown, Delaware'

        },        
        {
          projectName: "Infosys",
          url: "https://www.infosys.com/",
          img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1415386231/utypaslbyxwfuwhfdzxd.png",
          desc: 'Infosys is a global leader in next-generation digital services and consulting.'

        },
        {
          projectName: "AdMarketingPPC",
          url: "https://admarketingppc.com",
          img: "https://images.unsplash.com/photo-1616499452581-cc7f8e3dd3c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          desc: 'A full-service digital marketing agency in San Diego offering web design, SEO, social media, PPC, video production and more.'

        },        {
          projectName: "WMS",
          url: "https://wmsmed.com",
          img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          desc: 'Delivering healthcare apps via user-centric design, rapid development and expertise in wearable devices and AI. Healthcare mobile apps.'

        }
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