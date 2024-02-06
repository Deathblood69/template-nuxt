import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isConnected = ref<boolean>(false)

  function handleConnexion() {
    isConnected.value = true
  }

  function handleDeconnexion() {
    isConnected.value = false
  }

  return {isConnected, handleConnexion, handleDeconnexion}
})
