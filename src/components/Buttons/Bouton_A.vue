<template>
  <div class="btn flex justify-center items-center mb-2">
    <!-- <RouterLink to="/Etape1_A" class=""> -->
    <p class="btn__text mask2 tracking-[2px]">COMMENCER</p>
    <!-- </RouterLink> -->
  </div>
</template>

<style lang="scss">
.btn {
  height: 50px;
  width: 250px;
  border-radius: 50px;
  transition: 0.3s;
  
  background-image: url("/Fond_Btn_A.png");

  &__text {
    font-family: "Cinzel", serif;
    font-weight: 600;
    letter-spacing: 5px;
    font-size: 30px;
  }
}
.btn:hover {
  //   scale: 2.2;
  background-image: url("/Fond_Btn_Hover_A.png");
}

.mask2 {
  /* background-color: red; */
  background: url("/Fond_Or_A.jpg"), lightgray 50% / cover no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
