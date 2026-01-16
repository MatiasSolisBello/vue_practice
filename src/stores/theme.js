import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    dark: false
  }),
  actions: {
    init() {
      const saved = localStorage.getItem('theme')
      console.log('saved: ', saved);
      this.dark = saved === 'dark'
      this.apply()
    },
    toggle() {
      this.dark = !this.dark
      console.log('toggle: ', this.dark);
      this.apply()
    },
    apply() {
      document.documentElement.classList.toggle('dark', this.dark)
      localStorage.setItem('theme', this.dark ? 'dark' : 'light')
      console.log('getItem: ', localStorage.getItem('theme'));
    }
  }
})