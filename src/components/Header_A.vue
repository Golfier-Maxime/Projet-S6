<template>
  <div
    class="index-header mt-[-2px] h-24 bg-[url('/Fond_Header_A2.png')] flex justify-center items-center fixed w-full"
  >
    <!-- <div>
        <img src="public/occurrens_altera.png" alt="" />
        </div> -->
    <div class="">
      <p class="Header_A mask">OCCURENS <span class="mx-3"></span> ALTERA</p>
    </div>
  </div>
</template>

<style>
.Header_A {
  font-family: "Cinzel", serif;
  font-weight: 600;
  letter-spacing: 5px;
  font-size: 34px;
}

.mask {
  /* background-color: red; */
  background: url("/Fond_Or_A.jpg"), lightgray 50% / cover no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.index-header {
  z-index: 2;
}
</style>
