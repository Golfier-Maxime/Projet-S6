<template>
  <div class="flex justify-center flex-col items-center">
    <input
      class="p-2 w-[600px]"
      v-model="prompt"
      placeholder="La description de votre personnage"
    />
    <button class="btn-AI" @click="generateImage">Générer l'image</button>
    <img v-if="imageUrl" :src="imageUrl" alt="Generated Content" />

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
  // color: white;
  background-color: white;
  border-radius: 15px;
  transition: 0.4s;
}
.btn-AI:hover {
  background-color: linear-gradient(
    rgba(48, 255, 0, 1) 0%,
    rgba(241, 255, 0, 1) 46%
  );
  color: white;
}
</style>
