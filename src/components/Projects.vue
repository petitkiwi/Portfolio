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
        <span
          class="title text-center"
          :class="{ gradient5: !nightMode, 'gradient1': nightMode }"
          >Projects</span
        >
        <!-- section line -->
      </div>
      <hr
        width="50%"
        :class="{ 'bg-gradient1': !nightMode, 'bg-gradient5': nightMode }"
      />

      <!-- <vue-tabs :activeTextColor="!nightMode ? '#06341F' : '#dfdfdf'">
      <v-tab title="design"> -->
          <div class="row">
            <div
              v-for="(design, idx) in all_info"
              :key="idx"
              :class="{ 'mt-4': idx === 0 ? true : true }"
              class="col-xl-6 col-bg-6 col-md-12 col-sm-12"
              style="position: relative;"
            >
              <vueper-slides
                :dragging-distance="50"
                fixed-height="300px"
                :bullets="false"
                slide-content-outside="bottom"
                style="position: aboslute"
                  @click.prevent="showModalFn(design)"

              >
                <vueper-slide
                  v-for="(slide, i) in design.pictures"
                  :key="i"
                  :image="slide.img"
                />
              </vueper-slides>
              <div
                style="width: 100%; display: flex; justify-content: space-between"
                class="mt-2"
              >
                <div>
                  <div class="title2" style="font-weight: 500;">{{ design.title }}</div>
                  <span
                    class="badge mr-2 mb-2"
                    v-for="tech in design.skills"
                    :key="tech"
                    :class="{ 'bg-gradient1': !nightMode, 'bg-gradient5': nightMode }"
                    >{{ tech }}</span
                  >
                  •
                  <span class="date ml-1">{{design.date}}</span>
                </div>
                <button
                  style="height: 31px; margin-top: 5px;"
                  class="btn-sm btn btn-outline-secondary no-outline"
                  @click.prevent="showModalFn(design)"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <br />
    </div> 

    <transition name="modal">
      <Modal
        :showModal="showModal"
        @close="closeModal"
        v-if="showModal"
        :portfolio="modal_info"
        :nightMode="nightMode"
      />
    </transition>
  </div>
</template>

<script>

import Modal from "./helpers/Modal";
import info from "../../info";

import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Projects",
  components: {
    VueTabs,
    VTab,
    VueperSlides,
    VueperSlide,
    Modal,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      all_info: info.portfolio,
      portfolio_info: [],
      showModal: false,
      modal_info: {},
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
    };
  },
  created() {
    for (var i = 0; i < this.limit; i++) {
      this.portfolio_info.push(this.all_info[i]);
    }
  },
  watch: {
    limit() {
      this.portfolio_info = [];
      for (var i = 0; i < this.limit; i++) {
        this.portfolio_info.push(this.all_info[i]);
      }
    },
  },
  methods: {
    closeModal() {
      this.showModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },

    showModalFn(design_portfolio) {
      this.modal_info = design_portfolio;
      this.showModal = true;
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

.btn {
  border-color: #52A37E;
  color: #52A37E;
}

.btn:hover {
  background-color: #52A37E;
  border-color: #52A37E;
  color: white;
}

.btn:focus {
  background-color: #52A37E;
  border-color: #52A37E;
  color: white;
}

 .vue-tabs .nav-tabs {
  border: none;
  font-size: 20px;
  font-weight: 500;
  display: flex;

  justify-content: center;
}

 .vue-tabs .tabs__link {
  color: #a0a0a0;
}

 .vue-tabs .nav-tabs > li.active > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
  padding-right: 0;
  padding-left: 0;
  margin-right: 15px;
  margin-left: 15px;
}

 .vue-tabs .nav-tabs > li > a:hover {
  background: transparent;
  color: #cbcbcb;
  transition: all 0.5s;
}

 .vue-tabs .nav-tabs > li > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
}

 .vue-tabs .nav-tabs > li > a:after {
  content: "";
  width: 20%;
  position: absolute;
  bottom: 3px;
  border-width: 0 0 2px;
  border-style: solid;
  transition: all 0.5s;
}

 .vue-tabs .nav-tabs > li.active > a:after {
  width: 100%;
  transition: all 0.5s;
}

.design-img {
  width: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.dimg {
  position: relative;
  border-radius: 15px;
}
.middle {
  transition: all 0.5s;
  opacity: 0;
  position: absolute;
  bottom: 0px;
  left: 70px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}

.dimg:hover .design-img {
  position: relative;
  border-radius: 15px;
  opacity: 0.1;
  cursor: pointer;
}

.dimg:hover .middle {
  opacity: 1;
}

.vueperslide {
  border-radius: 10px !important;
}
.vueperslides__parallax-wrapper {
  border-radius: 10px !important;
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
 .vueperslides__arrow {
  outline: none !important;
  border: none;
  color: grey;
}

.badge {
  background-color: #ddbbbb;
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
}

.date {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.75
}
</style>
