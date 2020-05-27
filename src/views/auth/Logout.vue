<template>
  <div></div>
</template>
<script>
/* eslint-disable */
import { setCurrentUser, logout } from "../../services/authService";
import { postRequest } from "../../services/requests";

export default {
  name: "Logout",
  created() {
    postRequest("/logout").then(() => {
      this.$store.commit("auth/logout");
      this.$router.push({ path: "/login" });
    });
  }
};
</script>