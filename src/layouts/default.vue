<script lang="ts" setup></script>

<template>
  <VApp>
    <VLayout class="rounded rounded-md">
      <VMain>
        <slot />
      </VMain>
    </VLayout>
  </VApp>
</template>

<style>
  html {
    overflow: auto;
  }

  body {
    margin: 0;
    padding: 0;
  }
</style>
