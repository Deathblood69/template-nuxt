import {beforeEach, describe, test} from 'vitest'
import middleware from '../../src/middleware/auth.global'
import type {RouteLocationNormalized} from 'vue-router'
import {createPinia, setActivePinia} from 'pinia'
import {useAuthStore} from '~/stores/auth.store'

describe("Tests sur le middleware d'authentification", () => {
  const pageConnexion: RouteLocationNormalized = {
    fullPath: '/connexion',
    hash: '',
    query: {},
    name: 'connexion',
    path: '/connexion',
    params: {},
    matched: [],
    meta: {},
    redirectedFrom: undefined,
  }
  const pageAccueil: RouteLocationNormalized = {
    fullPath: '/',
    hash: '',
    query: {},
    name: 'accueil',
    path: '/',
    params: {},
    matched: [],
    meta: {
      layout: 'auth',
    },
    redirectedFrom: undefined,
  }
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  test("Redirection vers la page de connexion car pas d'authentification", () => {
    middleware(pageAccueil, pageAccueil)
  })
  test("Redirection vers la page d'accueil car authentification", () => {
    const authStore = useAuthStore()
    authStore.handleConnexion()
    middleware(pageAccueil, pageAccueil)
  })
  test("Redirection vers la page d'accueil car déja connecté", () => {
    const authStore = useAuthStore()
    authStore.handleConnexion()
    middleware(pageConnexion, pageAccueil)
  })
})
