import {beforeEach, describe, expect, test} from 'vitest'
import {createPinia, setActivePinia} from 'pinia'
import {useThemeStore} from '~/stores/theme.store'

describe("Tests du store d'authentification", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  test('Gestion du changement de theme', () => {
    const themeStore = useThemeStore()
    expect(themeStore.theme).toBe('light')
    themeStore.toggleTheme()
    expect(themeStore.theme).toBe('dark')
    themeStore.toggleTheme()
    expect(themeStore.theme).toBe('light')
  })
  test('Initialisation du theme', () => {
    const themeStore = useThemeStore()
    themeStore.initialiserTheme()
    expect(themeStore.theme).toBe('light')
  })
})
