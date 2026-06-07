import { defineStore } from 'pinia'

interface UiState {
  isMenuOpen: boolean
  scrolled: boolean
}

export const useUiStore = defineStore('ui', {
  state: (): UiState => ({
    isMenuOpen: false,
    scrolled: false,
  }),
  
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    setScrolled(value: boolean) {
      this.scrolled = value
    },
  },
})
