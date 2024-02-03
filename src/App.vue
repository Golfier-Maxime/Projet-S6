<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header_A from "@/components/Header_A.vue";
import Footer from "@/components/Footer.vue";
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
  font-family: 'Poppins', sans-serif;
}
</style>
