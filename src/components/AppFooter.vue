<script setup lang="ts">
  interface Props {
    author: string
  }

  defineProps<Props>()
</script>

<template>
  <VFooter
    app
    name="footer"
  >
    {{ author }} © {{ new Date().getFullYear() }}
  </VFooter>
</template>
