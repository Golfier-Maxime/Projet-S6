// store/global.js
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    token: null,

  }),
  actions: {
    setToken(token) {
      if (token) {
        this.token = token
        localStorage.setItem('token', JSON.stringify(this.token))
      }
    },
    clearToken() {
      this.token = null
      localStorage.setItem('token', JSON.stringify(this.token))
    },
  },
})