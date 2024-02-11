<template>
  <div class="flex justify-center flex-col items-center mx-10">
    <input
      class="p-2 w-[400px] rounded-xl text-black"
      v-model="prompt"
      placeholder="La description de votre personnage"
    />
    <button class="btn-AI" @click="generateImage">Générer l'image</button>
    <img class="w-[400px] mb-10" v-if="imageUrl" :src="imageUrl" alt="Generated Content" />

    <!-- <p v-if="imageUrl">{{ imageUrl }}</p> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      prompt: "",
      imageUrl: null,
    };
  },
  methods: {
    async generateImage() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/generate-image",
          { prompt: this.prompt }
        );
        // Traitez la réponse pour extraire et afficher l'image
        console.log(response, "coucou");
        this.imageUrl = response.data.data[0].url; // Mettez à jour selon la structure de la réponse
      } catch (error) {
        console.error("Error generating image:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-AI {
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 10px;
  color: black;
  background-color: white;
  border-radius: 15px;
  transition: 0.4s;
}
.btn-AI:hover {
  box-shadow: inset 0px 5px 5px 0px rgba(0,0,0,0.5) ;
}
</style>
