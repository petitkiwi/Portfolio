<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div
          class="modal-container"
          :class="{
            'bg-gradient0': !nightMode,
            'bg-gradient5': nightMode,
            'gradient1': nightMode,
          }"
        >
        <!-- modal title (open) -->
          <div class="title1 px-4 pt-3">
            <span :class="{ 'gradient1': nightMode }">{{
              portfolio.name
            }}</span>
            <a
              class="pull-right"
              style="font-size: 18px;"
              @click="$emit('close')"
              ><i class="fa fa-times"></i
            ></a>
            <hr
              class="my-1"
              :class="{ 'bg-gradient2': !nightMode, 'bg-gradient5': nightMode }"
            />
          </div>

          <div class="modal-body my-0 pb-0 px-4 pt-0">
            <!-- flex container for date, category, and button -->
            <div class="d-flex justify-content-between align-items-center mb-2 date" :class="{ 'gradient1': nightMode, 'gradient6': !nightMode }">
              <div>
                <span>{{ portfolio.date }} • {{ portfolio.category }}</span>
              </div>
              <!-- clickable link button to visit project -->
              <a v-if="portfolio.link !== ''" :href="portfolio.link" target="_blank" class="btn w-25">
                Visit Project
              </a>
            </div>  

            <div class="pb-1 bheight">
              <!-- modal skills (open) -->
              <span
                class="badge mr-2 mb-2"
                v-for="tech in portfolio.skills"
                :key="tech"
                :class="{ 'bg-gradient1': !nightMode, 'bg-gradient6': nightMode }"
                >{{ tech }}</span
              >
            </div>

            <!-- modal description (open) -->
            <div style="text-align: justify;">
              <span v-html="portfolio.description"></span>
            </div>
            <hr />
            <div>
              <Gallery 
              :images="portfolio.pictures" 
              :design="true" /> 
            </div>
          </div>

          <!-- <div class="text-center pb-3">
            <hr
              class="mt-1 mb-3"
              :class="{ 'bg-gradient2': !nightMode, 'bg-gradient5': nightMode }"
            />
            <button class="btn w-25" @click="$emit('close')">Close</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from "./Gallery";

export default {
  name: "Modal",
  components: {
    Gallery,
  },
  props: {
    showModal: {
      type: Boolean,
    },
    portfolio: {
      type: Object,
    },
    nightMode: {
      type: Boolean,
    },
  },
  created() {
    document.getElementsByTagName("body")[0].classList.add("modal-open");
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
  },
};
</script>


<style scoped>

body.modal-open {
  overflow: hidden;
}

a {
  text-decoration: none;
  color: black;
  transition: all 0.2s;
  cursor: pointer;
}

a:hover {
  transition: all 0.2s;
  color: #3E946D;
}

.date {
  font-size: 14px;
  font-weight: 400;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease;
}

.modal-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 40%;
  max-height: 70%;
  margin: 0px auto;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  flex-direction: column;
  display: flex; /*added*/
}

@media screen and (max-width: 1600px) {
  .modal-container {
    width: 60%;
  }
}

@media screen and (max-width: 1200px) {
  .modal-container {
    width: 80%;
  }
}

@media screen and (max-width: 580px) {
  .modal-container {
    width: 90%;
  }
}

.modal-body {
  margin: 20px 0;
  overflow-y: scroll;
  max-height: inherit;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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
  font-weight: 500;
}

.badge {
  transition: all 0.5s;
  font-weight: 500;
}

/* .badge:hover {
  transition: all 0.5s;
  box-shadow: 2px 2px 5px;
  color: 'bg-gradient2'
} */

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

</style>
