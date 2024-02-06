import {defineStore} from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  type Theme = 'light' | 'dark'

  const theme = ref<Theme>('light')

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  function initialiserTheme() {
    let preferredTheme: Theme
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      preferredTheme = 'dark'
    } else {
      preferredTheme = 'light'
    }
    theme.value = preferredTheme
  }

  return {theme, toggleTheme, initialiserTheme}
})
