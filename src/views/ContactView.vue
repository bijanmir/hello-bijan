<template>


<section class="section">
  
  <div class="columns">
    <div class="column"><contact-form></contact-form></div>
  </div>
</section>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactForm from "../components/contact/ContactForm.vue";

export default defineComponent({
  components: {
    ContactForm,
  },
});
</script>
