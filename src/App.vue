<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header_A from "@/components/Header_A.vue";
</script>

<template>
  <div class="bg-[#212121] text-white">
    <Header_A></Header_A>
    <RouterView />
  </div>
</template>
