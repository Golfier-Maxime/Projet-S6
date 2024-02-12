// store/global.js
import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    token: null,
    pseudo: null,
    imageUrl: null,
  }),
  actions: {
    setToken(token, pseudo) {
      if (token) {
        this.token = token;
        localStorage.setItem("token", JSON.stringify(this.token));
      }
      if (pseudo) {
        this.pseudo = pseudo;
        localStorage.setItem("pseudo", this.pseudo);
      }
      // if (imageUrl) {
      //   this.imageUrl = imageUrl;
      //   localStorage.setItem("imageUrl", this.imageUrl);
      // }
    },
    clearToken() {
      this.token = null;
      this.pseudo = null;
      // this.imageUrl = null;
      localStorage.setItem("token", JSON.stringify(this.token));
      localStorage.setItem("pseudo", this.pseudo);
      localStorage.setItem("imageUrl", this.imageUrl);
    },
  },
});
