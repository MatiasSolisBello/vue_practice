import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    dark: false
  }),
  actions: {
    init() {
      const saved = localStorage.getItem('theme')
      this.dark = saved === 'dark'
      this.apply()
    },
    toggle() {
      this.dark = !this.dark
      this.apply()
    },
    apply() {
      document.documentElement.classList.toggle('dark', this.dark)
      localStorage.setItem('theme', this.dark ? 'dark' : 'light')
    }
  }
})