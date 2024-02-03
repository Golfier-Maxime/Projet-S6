<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import Bouton_A from "@/components/Buttons/Bouton_A.vue";
import "swiper/swiper-bundle.css";

const mySwiper = ref(null);

function goNext() {
  mySwiper.value.swiper.slideNext();
}

function goPrev() {
  mySwiper.value.swiper.slidePrev();
}
</script>

<template>
  <div class="flex justify-center">
    <h1 class="hero__title mt-36">Découvre l'Histoire de l'autre</h1>
  </div>
  <div class="flex justify-between mx-6 mt-[300px]">
    <div>
      <img class="w-[35px]" src="/left.svg" alt="" />
      <!-- <p class="font-thin">Slide to Left</p> -->
    </div>
    <div class="">
      <img class="w-[35px]" src="/right.svg" alt="" />
    </div>
  </div>
  <swiper :slidesPerView="1" class="mb-6 mt-[-300px]" ref="mySwiper">
    <swiper-slide>
      <div id="hero1" class="hero">
        <div class="hero__img flex">
          <div class="flex flex-col justify-center items-center w-full mx-6">
            <h2 class="hero__title-h2 mb-4">Antiquité</h2>
            <img class="w-56" src="/Logo/Logo_Antique_W.png" alt="" />
            <RouterLink to="/Etape1_A" class=""
              ><Bouton_A class="mt-10"></Bouton_A>
            </RouterLink>
          </div>
          <div class="flex justify-end">
            <img class="rounded-r-[30px]" src="/nike.webp" alt="" />
            <!-- Ici la légende de l'image -->
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div id="hero2" class="hero">
        <div class="hero__img flex">
          <div class="flex flex-col justify-center items-center w-full mx-6">
            <h2 class="hero__title-h2 mb-4">Moyen Âge</h2>
            <img class="w-56" src="/Logo/Logo_MA_W.png" alt="" />
            <Bouton_A class="mt-10"></Bouton_A>
          </div>
          <div class="flex justify-end">
            <img class="rounded-r-[30px]" src="/saint2.webp" alt="" />
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div id="hero3" class="hero">
        <div class="hero__img flex">
          <div class="flex flex-col justify-center items-center w-full mx-6">
            <h2 class="hero__title-h2 mb-4">Epoque Moderne</h2>
            <img class="w-56" src="/Logo/Logo_EM_W.png" alt="" />
            <Bouton_A class="mt-10"></Bouton_A>
          </div>
          <div class="flex justify-end">
            <img class="rounded-r-[30px]" src="/louis14.jpg" alt="" />
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div id="hero4" class="hero">
        <div class="hero__img flex">
          <div class="flex flex-col justify-center items-center w-full mx-6">
            <h2 class="hero__title-h2 mb-4">Epoque</h2>
            <h2 class="hero__title-h2 mb-4">Contemporaine</h2>
            <img class="w-56" src="/Logo/Logo_EC_W.png" alt="" />
            <Bouton_A class="mt-10"></Bouton_A>
          </div>
          <div class="flex justify-end">
            <img class="rounded-r-[30px]" src="/napo1.jpg" alt="" />
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div id="hero5" class="hero">
        <div class="hero__img flex">
          <div class="flex flex-col justify-center items-center w-full mx-6">
            <h2 class="hero__title-h2 mb-4">L'avenir</h2>
            <img class="w-56" src="/Logo/Logo_FUTUR_W.png" alt="" />
            <Bouton_A class="mt-10"></Bouton_A>
          </div>
          <div class="flex justify-end">
            <img class="rounded-r-[30px]" src="/futur.jpg" alt="" />
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-family: "Rubik Mono One", monospace;
    font-size: 44px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  &__title-h2 {
    font-family: "Rubik Mono One", monospace;
    font-size: 30px;
  }

  &__img {
    background-color: #3f3f3f;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 30px;
    height: 600px;
    width: 1000px;
    margin-bottom: 30px;
  }
}

.navigation-button {
  /* Stylez vos boutons ici */
}
</style>
