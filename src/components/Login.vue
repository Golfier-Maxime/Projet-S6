<template>
  <main class="pt-40">
    <!-- <h1 class="m-5 hero__title text-3xl">Inscris toi et connecte toi pour découvrir</h1> -->
    <div>
      <h2 class="m-5 hero__title text-3xl">Inscription</h2>

      <form @submit.prevent="inscription" method="post" class="m-5">
        <p v-if="successMessage" class="m-5 text-green-500">{{ successMessage }}</p>
        <input
          class="border-black border-2 px-2 py-1 mx-2 my-1 rounded-lg text-black"
          v-model="inscriptionData.email"
          type="text"
          name="email"
          id="inscription-email"
          required
          placeholder="Email"
        />
        <input
          class="border-black border-2 px-2 py-1 mx-2 my-1 rounded-lg text-black"
          v-model="inscriptionData.password"
          type="password"
          name="mdp"
          id="inscription-mdp"
          required
          placeholder="Mot de Passe"
        />
        <input
          class="border-black border-2 px-2 py-1 mx-2 my-1 rounded-lg text-black"
          v-model="inscriptionData.pseudo"
          type="text"
          name="pseudo"
          id="inscription-pseudo"
          required
          placeholder="Pseudo"
        />

        <input
          type="submit"
          value="Inscription"
          class="border-black border-2 px-2 py-1 mx-2 my-1 rounded-lg"
        />
      </form>
     
    </div>

    <div>
      <h2 class="m-5 hero__title text-3xl">Connexion</h2>

      <form @submit.prevent="connexion" method="post" class="m-5">
        <input
          class="border-black border-2 px-2 py-1 mx-2 my-1 rounded-lg text-black"
          v-model="loginData.email"
          type="text"
          name="email"
          id="login-email"
          required
          placeholder="Email"
        />
        <input
          class="border-black border-2 px-2 py-1 mx-2 my-1 rounded-lg text-black"
          v-model="loginData.password"
          type="password"
          name="mdp"
          id="login-mdp"
          required
          placeholder="Mot de Passe"
        />

        <input
          type="submit"
          value="Connexion"
          class="border-black border-2 px-2 py-1 mx-2 my-1 rounded-lg"
        />
        
    
      </form>

    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useGlobalStore } from "/store/global.js";
// Accéder au store global
const globalStore = useGlobalStore();
// console.log(globalStore.token);

// Fonction pour définir le token
const setToken = (token) => {
  globalStore.setToken(token);
};

const inscriptionData = ref({
  email: "",
  password: "",
  pseudo: "",
  // imageUrl:"",
});

const loginData = ref({
  email: "",
  password: "",
  pseudo: "",
  // imageUrl:"",
});

const connexion = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/connexion",
      loginData.value
    );
    // localStorage.setItem('token', JSON.stringify(response.data.userId))
    globalStore.setToken(
      response.data.userId,
      response.data.pseudo,
      response.data.imageUrl
    );
    console.log(response.data.pseudo);
    // console.log(response.data.imageUrl);
    console.log(response.data.userId); // Handle the response as needed
    // Optionally, you can reset the form data after successful login
    loginData.value.email = "";
    loginData.value.password = "";
    loginData.value.pseudo = "";
    // loginData.value.imageUrl = "";
  } catch (error) {
    console.error("Error during login:", error);
  }
};

const inscription = async () => {
  // alert("vous vous êtes inscrit ! Connectez-vous !");
  try {
    
    const response = await axios.post(
      "http://localhost:3000/inscription",
      inscriptionData.value
    );
    
// Mise à jour du message de succès après l'inscription réussie
    console.log(response.data); // You can handle the response as needed

    // Optionally, you can reset the form data after successful submission
    inscriptionData.value.email = "";
    inscriptionData.value.password = "";
    inscriptionData.value.pseudo = "";
  } catch (error) {
    console.error("Error during inscription:", error.message);
  }
};
</script>
