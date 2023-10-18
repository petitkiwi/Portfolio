<template>
  <div class="logo-div">
    <span
      class="logo-title-name"
      :class="{ 'gradient6': !nightMode, 'gradient1': nightMode }"
      >{{ name }}

      <!-- logo CL -->
      <img v-if="!nightMode" src="@/assets/logo_dark.png" alt="CL Logo" class="small-logo" />
      <img v-else src="@/assets/logo_light.png" alt="CL Logo" class="small-logo" />

    </span
    >
  </div>
</template>

<script>
import info from "../../../info";

export default {
  name: "Logo",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      name: info.logo_name,
    };
  },
};
</script>

<style scoped>
.logo-div:hover .logo-title-name {
  letter-spacing: 0px;
  transition: 0.5s all;
}

.logo-title-name {
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 2px;
  transition: 0.5s all;
}

.small-logo {
  width: 40px; 
  margin-left: 5px; 
  margin-bottom: 10px;
}

</style>
