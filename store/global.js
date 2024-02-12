// store/global.js
import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    token: null,
    pseudo: null,
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
    },
    clearToken() {
      this.token = null;
      this.pseudo = null;

      localStorage.setItem("token", JSON.stringify(this.token));
      localStorage.setItem("pseudo", this.pseudo);
    },
  },
});
