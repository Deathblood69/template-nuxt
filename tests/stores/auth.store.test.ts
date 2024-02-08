import {beforeEach, describe, expect, test} from 'vitest'
import {createPinia, setActivePinia} from 'pinia'
import {useAuthStore} from '~/stores/auth.store'

describe("Tests du store d'authentification", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test("Gestion de la connexion d'un utilisateur", () => {
    const authStore = useAuthStore()
    expect(authStore.isConnected).toBeFalsy()
    authStore.handleConnexion()
    expect(authStore.isConnected).toBeTruthy()
    authStore.handleDeconnexion()
    expect(authStore.isConnected).toBeFalsy()
  })
})
