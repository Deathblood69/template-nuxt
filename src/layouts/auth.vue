<script lang="ts" setup>
  const runtimeConfig = useRuntimeConfig()

  const themeStore = useThemeStore()

  onMounted(() => {
    themeStore.initialiserTheme()
  })
</script>

<template>
  <VApp :theme="themeStore.theme">
    <VLayout class="rounded rounded-md">
      <VMain class="d-flex flex-column justify-center align-center">
        <slot />
      </VMain>
      <AppFooter
        :author="runtimeConfig.public['AUTHOR']"
        class="flex-shrink-0 d-flex justify-center"
        style="flex: 0"
      />
    </VLayout>
  </VApp>
</template>
