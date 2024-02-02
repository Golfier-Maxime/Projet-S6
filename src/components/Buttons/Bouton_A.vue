<template>
  <div class="btn flex justify-center items-center mb-2">
    <!-- <RouterLink to="/Etape1_A" class=""> -->
    <p class="btn__text mask tracking-[2px]">COMMENCER</p>
    <!-- </RouterLink> -->
  </div>
</template>

<style lang="scss">
.btn {
  height: 50px;
  width: 200px;
  border-radius: 50px;
  transition: 0.3s;
  background-image: url("/Fond_Btn_A.png");

  &__text {
    font-family: "roman_font";
    font-size: 30px;
  }
}
.btn:hover {
  //   scale: 2.2;
  background-image: url("/Fond_Btn_Hover_A.png");
}
</style>
