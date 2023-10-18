<template>
  <div class="bg-gradient5">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div class="col-xl-12 col-md-12 col-sm-12 text-center">
          <div class="text-center">
            <!-- Centered "socials" buttons -->
            <button class="btn btn-outline-secondary mx-2" @click="open('linkedin')">
              <i class="fa fa-linkedin"></i>
            </button>
            <button class="btn btn-outline-secondary mx-2" @click="open('github')">
              <i class="fa fa-github"></i>
            </button>
            <button class="btn btn-outline-secondary mx-2" @click="open('DVIC')">
              <i class="fa fa-graduation-cap"></i>
            </button>
            <button class="btn btn-outline-secondary mx-2" @click="open('resume')">
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
  name: "Footer",
  data() {
    return {
      linkedin: info.links.linkedin,
      github: info.links.github,
      DVIC: info.links.DVIC,
      resume: info.links.resume,
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
span {
  font-weight: 500;
}

.btn {
  border-color: white;
  color: white;
}

.btn:hover {
  background-color: white;
  border-color: white;
  color: #3E946D;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: #3E946D;
}

@media screen and (max-width: 580px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>
