<script lang="ts" setup>
  import type {NuxtError} from '#app'

  defineProps({
    error: Object as () => NuxtError,
  })

  const themeStore = useThemeStore()
</script>

<template>
  <VApp :theme="themeStore.theme">
    <AppErreur
      :message="error?.message"
      titre="Détails de l'erreur"
    />
  </VApp>
</template>
