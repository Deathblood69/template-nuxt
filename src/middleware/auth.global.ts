import {useAuthStore} from '~/stores/auth.store'
import {PATHS} from '~/constants/paths.const'

/**
 * Check if authenticated and authorized
 */
export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore()
  if (!authStore.isConnected && to.path !== PATHS.connexion) {
    return navigateTo(PATHS.connexion)
  } else if (authStore.isConnected && to.path === PATHS.connexion) {
    return navigateTo(PATHS.accueil)
  }
})
