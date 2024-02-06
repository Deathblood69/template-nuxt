<script lang="ts" setup>
  /**  PROPS  **/
  interface Props {
    titre: string
    message?: string
  }

  defineProps<Props>()

  /**  METHODS  **/

  function goBack() {
    // Ajoutez le code pour revenir à la page précédente
    useRouter().go(-1)
  }
</script>

<template>
  <VContainer
    class="container"
    fill-height
    fluid
  >
    <VCard class="pa-5 rounded rounded-md">
      <VCardTitle class="titre center">
        <h2>Erreur</h2>
      </VCardTitle>
      <VCardText class="center">
        <p>Une erreur est survenue lors du chargement de la page.</p>
      </VCardText>
      <VCardText v-if="message">
        <VExpansionPanels>
          <VExpansionPanel
            :text="message"
            :title="titre"
            class="panel"
          />
        </VExpansionPanels>
      </VCardText>
      <VCardActions class="center">
        <VBtn
          color="primary"
          variant="flat"
          @click="goBack"
        >
          Page Précédente
        </VBtn>
      </VCardActions>
    </VCard>
  </VContainer>
</template>

<style scoped>
  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .titre {
    padding: 1em;
  }

  .center {
    display: flex;
    justify-content: center;
  }
</style>
