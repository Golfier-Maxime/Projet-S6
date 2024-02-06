<template>
  <div>
    <input v-model="prompt" placeholder="Enter a prompt" />
    <button class="ml-4 text-white" @click="generateImage">
      Generate Image
    </button>
    <img v-if="imageUrl" :src="imageUrl" alt="Generated Content" />
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
        this.imageUrl = response.data; // Mettez à jour selon la structure de la réponse
      } catch (error) {
        console.error("Error generating image:", error);
      }
    },
  },
};
</script>
