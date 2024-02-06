<script setup lang="ts">
  import type {ListItem} from '~/types/listItem'

  type Emits = {
    navigate: [value: string]
  }

  const emit = defineEmits<Emits>()

  interface Props {
    items: ListItem[]
  }

  defineProps<Props>()
</script>

<template>
  <VList>
    <VListItem
      color="primary"
      v-for="item in items"
      :key="item.libelle"
      :value="item"
      :active="item.active"
      @click="emit('navigate', item.path as any)"
    >
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>
      <VListItemTitle v-text="item.libelle" />
    </VListItem>
  </VList>
</template>
