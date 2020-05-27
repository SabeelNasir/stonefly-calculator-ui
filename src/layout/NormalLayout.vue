<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <div class="main-content" :data="sidebarBackground">
      <base-header type="gradient-info" class="pb-6 pb-6 pt-5 pt-md-6">
        <side-bar
          :background-color="sidebarBackground"
          iconTextClass="text-white"
          :logo="$config.appLogo"
        >
          <template slot="links">
            <sidebar-item
              :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard'
          }"
            />

            <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet text-blue', path: '/icons'}" />
            <sidebar-item :link="{name: 'Maps', icon: 'ni ni-pin-3 text-orange', path: '/maps'}" />
            <sidebar-item
              :link="{name: 'User Profile', icon: 'ni ni-single-02 text-yellow', path: '/profile'}"
            />
            <sidebar-item
              :link="{name: 'Tables', icon: 'ni ni-bullet-list-67 text-red', path: '/tables'}"
            />
            <sidebar-item :link="{name: 'Login', icon: 'ni ni-key-25 text-info', path: '/login'}" />
            <sidebar-item
              :link="{name: 'Register', icon: 'ni ni-circle-08 text-pink', path: '/register'}"
            />
          </template>
        </side-bar>
      </base-header>
      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <div class="container-fluid">
            <div class="mt-lg--5 mt-xl--5 mt-md--5 mt-sm--3 mt--2">
              <router-view></router-view>
            </div>
          </div>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    FadeTransition
  },
  data() {
    return {
      sidebarBackground: "vue" //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
<style>
.text-fern {
  color: #5eae6d;
}
.text-theme {
  color: #5eae6d;
}
</style>
