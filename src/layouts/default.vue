<script lang="ts" setup>
  import {PATHS} from '~/constants/paths.const'
  import type {ToolbarButton} from '~/types/toolbarButton'
  import {MENU_ITEMS} from '~/constants/menuItems.const'
  import AppFooter from '~/components/AppFooter.vue'

  const runtimeConfig = useRuntimeConfig()

  const router = useRouter()
  const route = useRoute()

  const themeStore = useThemeStore()
  const authStore = useAuthStore()

  const openMenu = ref(false)

  const actions = ref<ToolbarButton[]>([
    {
      icon: 'mdi-theme-light-dark',
      action: () => {
        themeStore.toggleTheme()
      },
    },
    {
      icon: 'mdi-logout',
      action: () => {
        authStore.handleDeconnexion()
        router.push(PATHS.connexion)
      },
    },
  ])

  const liens = computed(() => {
    return MENU_ITEMS.value.map((e) => {
      return {
        ...e,
        active: route.path === e.path,
      }
    })
  })

  function handleMenu() {
    openMenu.value = !openMenu.value
  }

  function handleNavigate(path: string) {
    router.push(path)
  }

  onMounted(() => {
    themeStore.initialiserTheme()
  })
</script>

<template>
  <VApp :theme="themeStore.theme">
    <VLayout class="flex flex-column">
      <AppBar
        class="bg-primary"
        :items="actions"
        @menu="handleMenu"
      />
      <VNavigationDrawer :model-value="openMenu">
        <AppList
          :items="liens"
          @navigate="handleNavigate"
        />
      </VNavigationDrawer>
      <VMain class="d-flex justify-center align-center">
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
