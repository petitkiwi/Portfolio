<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-gradient5': nightMode }"
    class="pt-5 p-st"
  >
    <div
      class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="row align-items-center">
        <!-- photo CV -->
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-center">
          <img :src="picture"/>
        </div>

        <!-- descritpion & buttons -->
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-5">
          <span
            class="home-title"
            :class="{ gradient5: !nightMode, 'gradient1': nightMode }"
            >Welcome to my portfolio! :)
          </span>
          <!-- double line break -->
          <br /><br />

          <div>
            <p v-for="item in description" :key="item">{{ item }}</p>
          </div>

          <!-- double line break -->
          <br />

          <div class="text-center pb-4">
            <button
              class="btn btn-outline-secondary mx-2 "
              @click="open('linkedin')"
              v-tooltip.bottom="'LinkedIn'"
            >
              <i class="fa fa-linkedin"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2" 
              @click="open('github')"
              v-tooltip.bottom="'GitHub'"
            >
              <i class="fa fa-github"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('DVIC')"
              v-tooltip.bottom="'DVIC'"
            >
              <i class="fa fa-graduation-cap"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('resume')"
              v-tooltip.bottom="'Resume'"
            >
              <i class="fa fa-file"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Home",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.photo,
      description: info.description,
      name: info.name,
      linkedin: info.links.linkedin,
      github: info.links.github,
      DVIC: info.links.DVIC,
      resume: info.links.resume
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "DVIC":
          window.open(this.DVIC, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>

.home-title {
  color: #022213;
  font-size: 32px;
  font-weight: 500;
}

img {
  max-width: 600px;
  max-height: 375px;
  margin-top: 90px;
  transform: rotateY(180deg);
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa {
  font-size: 15px;
}

.btn {
  border-color: #84CFAD;
  color: #84CFAD;
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

.btn:focus {
  outline: none !important;
}

p {
  text-align: justify;
  font-weight: 400;
}

/* LEAVES */
</style>
