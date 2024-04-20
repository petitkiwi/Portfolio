<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-gradient0 fixed-top p-st"
      :class="{
        'bg-gradient0': !nightMode,
        'navbar-blur': navbarConfig.blur,
        'bg-gradient6': nightMode,
      }"
    >
      <div class="container">
        <a
          class="navbar-brand"
          href="/"
          @click.prevent="$emit('scroll', 'home')"
        >
          <Logo :nightMode="nightMode" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style="color: #093721; font-size: 23px;"
            ><i class="fa fa-bars"></i>
            </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">

            <li class="nav-item mx-2 ">
              <a
                class="nav-link"
                href="/projects"
                @click.prevent="$emit('scroll', 'projects')"
                :class="{ 'gradient1': nightMode }"
                >Projects</a
              >
            </li>

            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/about"
                @click.prevent="$emit('scroll', 'about')"
                :class="{ 'gradient1': nightMode }"
                >About</a
              >
            </li>

            <!-- <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/skills"
                @click.prevent="$emit('scroll', 'skills')"
                :class="{ 'gradient1': nightMode }"
                >Skills</a
              >
            </li> -->

            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/contact"
                @click.prevent="$emit('scroll', 'contact')"
                :class="{ 'gradient1': nightMode }"
                >Contact</a
              >
            </li>

            <li class="nav-item ml-2">
              <a
                class="nav-link"
                href="#"
                @click.prevent="switchMode"
                :class="{ 'gradient1': nightMode }"
                ><i
                  :class="{
                    'fa fa-sun-o': nightMode,
                    'fa fa-moon-o': !nightMode,
                  }"
                  v-tooltip.bottom="nightMode ? 'Light Mode' : 'Night Mode'"
                ></i
              ></a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "./helpers/Logo";
import info from "../../info";

export default {
  name: "Navbar",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      navbarConfig: info.config.navbar,
      localNightMode: this.nightMode,
    };
  },
  components: {
    Logo,
  },
  methods: {
    switchMode() {
      this.localNightMode = !this.localNightMode;
      this.$emit("nightMode", this.localNightMode);
    },
  },
};
</script>

<style scoped>
.nav-link {
  font-weight: 500;
}
/* fond du bouton night mode */
.nav-link:hover{
  background-color: #2D7D59;
}

button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

/* bottom line of the top bar*/
nav {
  border-bottom: 1px solid #52A37E;
  position: fixed !important;
}

.navbar-blur {
  background-color: #8AD0B0;
  backdrop-filter: blur(12px);
}
</style>
