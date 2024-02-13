<script setup>
import { ref } from "vue";
import { watch } from "vue";
import AI from "@/components/AI.vue";
import Login from "@/components/Login.vue";
import { useGlobalStore } from "/store/global.js";

const store = useGlobalStore();
console.log(store.token);
console.log(store.pseudo);
console.log(store.imageUrl, "imageUrl");

// watch(
//   () => store.imageUrl,
//   (newImageUrl) => {
//     console.log("Nouvelle imageUrl:", newImageUrl);
//     // Ici, vous pouvez ajouter une logique supplémentaire qui réagit au changement de l'image URL.
//   }
// );

// État pour stocker le nom du personnage
// const characterName = ref("");
// État pour contrôler l'affichage du formulaire ou de l'histoire
// const nameEntered = ref(false);

const currentParagraphIndex = ref(0); // Index du paragraphe actuel

// Fonction pour gérer la soumission du nom
// function submitName() {
//   if (characterName.value.trim() !== "") {
//     nameEntered.value = true;
//     console.log(characterName);
//   }
// }

// Fonction pour passer au prochain paragraphe
function nextParagraph() {
  currentParagraphIndex.value += 1;
}

// Nombre total de paragraphes
const totalParagraphs = 8; // Assurez-vous de définir cela en fonction du nombre réel de paragraphes que vous avez
</script>

<template>
  <div>
    <div v-if="!store.token" class="mb-96">
      <Login></Login>
    </div>
    <!-- Formulaire pour entrer le nom du personnage -->
    <!-- <div v-if="!nameEntered" class="flex flex-col items-center justify-center h-screen">
      <label for="name">Entrez le nom de votre personnage :</label>
      <input v-model="characterName" id="name" type="text"
        class="mt-2 shadow-sm border-2 text-black border-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5" />
      <button @click="submitName" class="mt-4">Commencer l'histoire</button>
    </div> -->
    <!-- Affichage de l'histoire avec le nom du personnage -->
    <!-- v-else -->
    <div v-else class="story flex">
      <div class="mt-60 mx-10">
        <div class="flex justify-center ">
          <h1 class="hero__title">Ton héros</h1>
        </div>
        <div class="flex flex-col items-center">
          <button class="btn-deco mx-2 w-[200px]" @click="store.clearToken">
            Déconnexion
          </button>
          <img
            class="mx-2 w-[440px] rounded-2xl"
            :src="store.imageUrl"
            alt=""
          />
          <!-- <p class="mx-2">imageUrl : {{ store.imageUrl }}</p> -->

          <!-- <p class="mx-2">pseudo : {{ store.pseudo }}</p> -->
        </div>
        
        <AI ></AI>
      </div>
      <div class="bg-slate-300 w-[20px]"></div>
      <div class="mx-[100px]">
        <div class="flex justify-center">
          <h1 class="hero__title mt-36">L'Antiquité</h1>
        </div>
        <div id="contenu">
          <!-- Utilisez characterName pour insérer le nom du personnage dans l'histoire -->
          <!-- Affichage conditionnel des paragraphes basé sur currentParagraphIndex -->
          <div class="mt-8" v-if="currentParagraphIndex >= 0" id="p1">
            <p>
              Dans une époque où les horizons s'étendent bien au-delà des
              confins de terres connues, je me trouve au cœur d'une quête qui
              transcende les frontières de l'Empire romain, poussé par une
              curiosité insatiable et une soif de connaissances sur les
              mystérieuses contrées de l'Est. Mon nom est
              <span id="nom" class="text-red-400">{{ store.pseudo }}</span
              >, un émissaire de l'Empire romain, choisi pour entreprendre un
              voyage périlleux vers l'Empire lointain des Han, une terre
              enveloppée de mystère, d'où proviennent des échos de richesses et
              de savoirs inimaginables.
            </p>
            <div class="flex justify-center mt-3">
              <img class="Paragraph_img" src="/illu/Rom1.webp" alt="" />
            </div>
          </div>
          <transition name="fade" mode="out-in">
            <div class="mt-8" v-if="currentParagraphIndex >= 1" id="p2">
              <p id="p2">
                Mon périple commence à Rome, sous le règne d'Auguste, qui,
                intrigué par les récits de la soie la plus fine et d'épices
                exotiques, me confie la mission de traverser les vastes déserts,
                les montagnes impénétrables, et les steppes sans fin, pour
                établir des liens avec l'Empire chinois des Han. Je suis
                accompagné par une garde de légionnaires fidèles et des
                marchands expérimentés, chacun portant les espoirs et les rêves
                de notre grand empire sur ses épaules.
              </p>
              <div class="flex justify-center mt-3">
                <img class="Paragraph_img" src="/illu/Rom1.webp" alt="" />
              </div>
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div class="mt-8" v-if="currentParagraphIndex >= 2" id="p3">
              <p id="p3">
                Nous voyageons d'abord vers l'est, à travers les Balkans, puis
                vers les territoires inexplorés au-delà de l'Anatolie. Chaque
                ville, chaque village que nous traversons, nous partageons des
                récits de notre empire lointain, et en échange, nous récoltons
                des informations précieuses sur les routes à emprunter, les
                dangers à éviter. Nos nuits sont remplies d'étoiles inconnues,
                nos jours marqués par les défis de la nature et les rencontres
                avec des peuples de cultures étonnamment diverses.
              </p>
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div class="mt-8" v-if="currentParagraphIndex >= 3" id="p4">
              <p id="p4">
                Au fil du temps, nous nous frayons un chemin à travers les
                contrées de l'Asie centrale, où les caravansérails deviennent
                nos havres de repos. Nous échangeons des pièces romaines contre
                des guides locaux qui parlent de villes où les toits brillent
                sous le soleil et où la soie est aussi commune que le tissu dans
                notre Rome bien-aimée. Les légendes de l'Empire des Han se
                matérialisent peu à peu, alimentant notre détermination.
              </p>
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div class="mt-8" v-if="currentParagraphIndex >= 4" id="p5">
              <p id="p5">
                Après de longs mois de voyage, nous atteignons finalement les
                frontières de l'Empire des Han. Ici, je suis émerveillé par
                l'ingéniosité et la splendeur de cette civilisation. Les marchés
                regorgent de produits inconnus à Rome, les jardins sont d'une
                beauté sereine, et les palais rivalisent avec le Capitole
                lui-même en grandeur. Je suis reçu par des fonctionnaires des
                Han, intrigués par notre présence et désireux d'en savoir plus
                sur notre lointain empire.
              </p>
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div class="mt-8" v-if="currentParagraphIndex >= 5" id="p6">
              <p id="p6">
                Mon rôle d'émissaire me voit engager dans d'innombrables
                discussions, où je partage des récits de notre gouvernement,
                notre culture, et nos avancées technologiques. En retour, je
                suis initié aux mystères de la philosophie chinoise, à l'art de
                la guerre de Sun Tzu, et aux merveilles de la soie, que je
                promets de ramener à Rome.
              </p>
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div class="mt-8" v-if="currentParagraphIndex >= 6" id="p7">
              <p id="p7">
                À travers ces échanges, je réalise que, malgré les distances et
                les différences, une soif commune de connaissance et un respect
                mutuel pour la grandeur de nos civilisations unissent l'Empire
                romain et l'Empire des Han. Mon voyage, qui avait commencé comme
                une mission d'exploration et de commerce, se transforme en une
                quête personnelle de compréhension et de connexion entre deux
                des plus grands empires de l'histoire.
              </p>
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div class="mt-8 mb-16" v-if="currentParagraphIndex >= 7" id="p8">
              <p id="p8">
                Lorsque je retourne finalement à Rome, chargé de présents et de
                récits de terres lointaines, je suis accueilli comme un héros.
                Mais plus précieux que les richesses matérielles, je rapporte
                une vision élargie du monde, un témoignage de l'immense
                diversité et de l'interconnexion des peuples de la Terre. Mon
                voyage a tracé un chemin non seulement à travers des déserts et
                des montagnes mais aussi à travers les barrières invisibles de
                l'incompréhension et de l'ignorance, pavant la voie à une
                nouvelle ère de dialogue et d'échange entre l'Orient et
                l'Occident.
              </p>
            </div>
          </transition>
          <!-- Bouton pour passer au prochain paragraphe, caché après le dernier paragraphe -->
          <button
            v-if="currentParagraphIndex < totalParagraphs - 1"
            @click="nextParagraph"
            class="mt-4 mb-16 flex items-center"
          >
            Suivant <img class="w-[35px]" src="/right.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Paragraph_img {
  width: 400px;
  border-radius: 20px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.btn-deco {
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 10px;
  color: black;
  background-color: white;
  border-radius: 15px;
  transition: 0.4s;
}
.btn-deco:hover {
  box-shadow: inset 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
}
</style>
