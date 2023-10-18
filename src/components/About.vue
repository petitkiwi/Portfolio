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
          :class="{ 'gradient6': !nightMode, 'gradient1': nightMode }"
          >My Journey</span
        >
        <!-- section line -->
      </div>
      <hr
        width="50%"
        :class="{'bg-gradient6': !nightMode, 'bg-gradient1': nightMode }"
      />
      <div class="row">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="education" :nightMode="nightMode" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="experience" :nightMode="nightMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "./helpers/Timeline";
import info from "../../info";

export default {
  name: "About",
  components: {
    Timeline,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      education: {
        title: "Education",
        data: info.education,
      },
      experience: {
        title: "Experience",
        data: info.experience,
      },
    };
  },
};
</script>

<style scoped>

.title {
  font-size: 30px;
  font-weight: 500;
}
</style>
