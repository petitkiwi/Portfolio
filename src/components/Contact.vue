<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-gradient0': !nightMode,
      'bg-gradient6': nightMode,
      'gradient1': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
      <!-- titre "contact" -->
        <span
          class="title text-center"
          :class="{ 'gradient3': !nightMode, 'gradient1': nightMode }"
          >Contact</span
        >
        <!-- section line -->
      </div>
      <hr
        width="50%"
        :class="{ 'bg-gradient3': !nightMode, 'bg-gradient3': nightMode }"
      />
      <br />

      <div class="text-center">
        <div
          class="mb-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <input
            type="text"
            name="user_name"
            v-model="name"
            placeholder="Name"
            class="pinput"
            :class="{
              'bg-gradient2': !nightMode,
              'bg-gradient3': nightMode,
              'gradient6': nightMode,
            }"
            style="transition-delay: 0.2s"
          />
        </div>

        <div
          class="my-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <input
            type="email"
            name="user_email"
            v-model="email"
            placeholder="Email"
            class="pinput"
            :class="{
              'bg-gradient2': !nightMode,
              'bg-gradient3': nightMode,
              'gradient6': nightMode,
            }"
            style="transition-delay: 0.4s"
          />
        </div>

        <div
          class="my-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <textarea
            name="message"
            v-model="text"
            placeholder="Message" 
            class="pinput"
            rows="4"
            :class="{
              'bg-gradient2': !nightMode,
              'bg-gradient3': nightMode,
              'gradient6': nightMode,
            }"
            style="transition-delay: 0.6s"
          ></textarea>
        </div>

        <button
          @click.prevent="sendEmail"
          class="mt-1 btn mb-3"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-offset="50"
        >
          Send
        </button>
      </div>

      <Snackbar
        :showSnackbar="showSnackbar"
        @close="closeSnackbar"
        :snackbarMessage="snackbarMessage"
        :snackbarColor="snackbarColor"
      />
    </div>
  </div>
</template>

<script>
import config from "../../config";
import emailjs from "emailjs-com";

import Snackbar from "./helpers/Snackbar";

export default {
  name: "Contact",
  components: {
    Snackbar,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      email: "",
      name: "",
      text: "",
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
    };
  },
  methods: {
    closeSnackbar(val) {
      if (!val) {
        setTimeout(() => {
          this.showSnackbar = val;
        }, 1000);
      }
    },
    sendEmail() {

      console.log("Email:", this.email);
      console.log("Name:", this.name);
      console.log("Text:", this.text);


      if (!this.email || !this.name || !this.text) {
        this.showSnackbar = true;
        this.snackbarMessage = "Please fill all the fields";
        this.snackbarColor = "#2D7D59";
      } else {
        var obj = {
          user_email: this.email,
          from_name: this.name,
          message_html: this.text,
          to_name: "Claire LEFEZ",
        };

        emailjs
          .send(
            config.emailjs.serviceID,
            config.emailjs.templateID,
            obj,
            config.emailjs.userID
          )
          .then(
            (result) => {
              this.showSnackbar = true;
              this.snackbarMessage = "Thanks! Message sent.";
              this.snackbarColor = "#2D7D59";

              this.email = "";
              this.text = "";
              this.name = "";
            },
            (error) => {
              this.showSnackbar = true;
              this.snackbarMessage = "Oops! Something went wrong.";
              this.snackbarColor = "#2D7D59";
            }
          );
      }
    },
  },
};
</script>

<style scoped>

.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.pinput {
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 7px;
  padding: 10px;
  width: 50%;
  transition: all 1s;
  background-color: #ccb3b8;
}

.btn {
  border-color: #84CFAD;
  color: #84CFAD;
  width: 50%;
}

.btn:hover {
  background-color: #84CFAD;
  border-color: #84CFAD;
  color: white;
}

.btn:focus {
  background-color: #84CFAD;
  border-color: #84CFAD;
  color: white;
}

/* .bg-gradient3 {
  background-color: #3c4148 !important;
} */

@media screen and (max-width: 1000px) {
  .pinput {
    width: 90%;
  }
  .pinput {
    width: 90%;
  }

  .btn {
    width: 90%;
  }
}
</style>
