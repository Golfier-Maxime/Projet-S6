<script setup>
import Bouton_A from "@/components/Buttons/Bouton_A.vue";
import Carousel from "@/components/Carousel.vue";
</script>

<template>
  <div class="hero">
    <h1 class="hero__title">Découvre l'Histoire de l'autre</h1>
    <div class="hero__img">
      <img src="" alt="" />
    </div>
    <Bouton_A></Bouton_A>
  </div>
  <Carousel></Carousel>
</template>

<style lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-family: "Luxurious Roman", serif;
    font-size: 24px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  &__img {
    background-color: aqua;
    height: 300px;
    width: 250px;
    margin-bottom: 30px;
  }
}
</style>
