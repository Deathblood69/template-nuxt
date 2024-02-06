<script lang="ts" setup>
  import {PATHS} from '~/constants/paths.const'

  definePageMeta({
    layout: 'auth',
  })

  const router = useRouter()

  const authStore = useAuthStore()

  function handleConnect() {
    authStore.handleConnexion()
    router.push(PATHS.accueil)
  }
</script>

<template>
  <VBtn
    color="primary"
    @click="handleConnect"
    >Connexion
  </VBtn>
</template>
