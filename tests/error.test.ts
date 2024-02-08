import {describe, expect, test} from 'vitest'
import {mount} from '@vue/test-utils'
import index from '../../src/error.vue'
import {vuetify} from '~/plugins/vuetify'

describe("Tests de la page d'erreur", () => {
  test('Affichage de la page', () => {
    const message = "Message d'erreur"
    const wrapper = mount(index, {
      props: {
        error: {
          message: message,
        },
      },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper).toBeDefined()

    expect(wrapper.text()).toContain('Erreur')
    expect(wrapper.text()).toContain(
      'Une erreur est survenue lors du chargement de la page.',
    )
    const bouton = wrapper.find('button')
    expect(bouton.text()).toContain("Détails de l'erreur")
    bouton.trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(bouton.text()).toContain(message)
    })
  })
})
