<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header_A from "@/components/Header_A.vue";
import Footer from "@/components/Footer.vue";

import { useGlobalStore } from "../store/global.js";
import { onMounted } from "vue";

// Accéder au store global
const globalStore = useGlobalStore();

onMounted(() => {
  const token = localStorage.getItem("token");
  const pseudo = localStorage.getItem("pseudo");
  const imageUrl = localStorage.getItem("imageUrl");
  globalStore.setToken(JSON.parse(token), pseudo, imageUrl);
});
</script>

<template>
  <div class="bg-[#212121] text-white">
    <Header_A></Header_A>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<style>
body {
  font-family: "Poppins", sans-serif;
}
</style>
