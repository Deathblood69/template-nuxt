<script lang="ts" setup xmlns="http://www.w3.org/1999/html">
  import type {ToolbarButton} from '~/types/toolbarButton'

  type Emits = {
    menu: []
  }

  const emit = defineEmits<Emits>()

  interface Props {
    items: ToolbarButton[]
  }

  defineProps<Props>()
</script>

<template>
  <VAppBar :elevation="2">
    <VAppBarNavIcon
      icon="mdi-menu"
      @click="emit('menu')"
    />
    <VAppBarTitle>Title</VAppBarTitle>
    <slot />
    <VBtn
      v-for="item in items"
      :key="item.icon"
      :icon="item.icon"
      @click="item.action"
    />
  </VAppBar>
</template>
