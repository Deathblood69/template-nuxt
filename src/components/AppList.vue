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
      v-for="item in items"
      :key="item.libelle"
      color="primary"
      :value="item"
      :active="item.active"
      @click="emit('navigate', item.path as any)"
    >
      <template #prepend>
        <v-icon :icon="item.icon" />
      </template>
      <VListItemTitle>{{ item.libelle }}</VListItemTitle>
    </VListItem>
  </VList>
</template>
