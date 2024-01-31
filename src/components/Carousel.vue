<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

// Vous pouvez ajouter des configurations ici
</script>

<template>
    <swiper :slidesPerView="1">
        <swiper-slide>
            <div id="hero1" class="hero">
                <h1 class="hero__title">Découvre l'Histoire de l'autre 1</h1>
                <div class="hero__img">
                    <img src="" alt="" />
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div id="hero2" class="hero">
                <h1 class="hero__title">Découvre l'Histoire de l'autre 2</h1>
                <div class="hero__img">
                    <img src="" alt="" />
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div id="hero3" class="hero">
                <h1 class="hero__title">Découvre l'Histoire de l'autre 3</h1>
                <div class="hero__img">
                    <img src="" alt="" />
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
