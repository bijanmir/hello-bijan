<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-3 is-capitalized"><span class="is-size-1">Say Hi!</span><br> I'd Love To Hear From You.</h2>

      <form v-on:submit.prevent="submitForm" class="form box" id="form">
        <div class="field">
          <label
            for="name"
            class="label is-size-4 has-text-weight-light"
          ></label>
          <div class="control has-icons-left">
            <input
              v-model="formData.name"
              type="text"
              name="name"
              id="name"
              class="input"
              placeholder="Name"
              autofocus
            />
            <span class="icon is-left">
              <i class="fa fa-user"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label
            for="email"
            class="label is-size-4 has-text-weight-light"
          ></label>
          <div class="control has-icons-left">
            <input
              v-model="formData.email"
              type="email"
              name="email"
              id="email"
              class="input"
              placeholder="Email"
            />
            <span class="icon is-left">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label
            for="message"
            class="label is-size-4 has-text-weight-light"
          ></label>
          <textarea
            v-model="formData.message"
            name="message"
            id="message"
            rows="5"
            class="textarea is-medium"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit" class="button is-success is-size-5">
          Submit
        </button>

        <div v-show="submittedForm" class="my-5 box" id="msg-success">
          <h3>Thanks, I'll get back to you shortly!</h3>
        </div>
      </form>

    </div>
  </section>
</template>
 


<style scoped>
.form {
  max-width: 500px;
}

.container {
  text-align: -webkit-center;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import emailjs from "@emailjs/browser";

export default defineComponent({
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      submittedForm: false,
    };
  },
  mounted() {
    var script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    document.head.appendChild(script);
  },
  methods: {
    submitForm() {
      emailjs.init("3tWVxkRwqsP8CZC2G");

      console.log(this.validateForm);

      if (this.validateForm) {
        console.log("Validated");

        try {
          const serviceID = "service_usqp4d5";
          const templateID = "template_zm2hbff";
          const templateParam = {
            from_name: this.formData.name,
            reply_to: this.formData.email,
            message: this.formData.message,
          };

          emailjs.send(serviceID, templateID, templateParam);
          console.log("success");

          let form = document.getElementById("msg-success");            
          this.submittedForm = true;

          if (form) {
            form.style.backgroundColor = "green";
            form.style.color = "white";
          }

          this.formData.name = "";
          this.formData.email = "";
          this.formData.message = "";
        } catch (e) {
          this.formData.name = "ERROR ";
          this.submittedForm = false;
          console.log(e);
        }
      }
    },
  },
  computed: {
    validateForm() {
      if (
        this.formData.name.length > 2 &&
        this.formData.email.length > 4 &&
        this.formData.email.includes('@') &&
        this.formData.message
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>
