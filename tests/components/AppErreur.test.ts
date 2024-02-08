import {describe, expect, test} from 'vitest'
import {mount} from '@vue/test-utils'
import AppErreur from '../../src/components/AppErreur.vue'
import {vuetify} from '~/plugins/vuetify'

describe('Tests du composant AppErreur', () => {
  test('Affichage de la page', () => {
    const titre = "Titre de l'erreur"
    const message = "Message d'erreur"

    const wrapper = mount(AppErreur, {
      props: {
        titre: titre,
        message: message,
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

    const bouton = wrapper.find('.v-expansion-panel-title')
    expect(bouton.text()).toContain(titre)
    bouton.trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(bouton.text()).toContain(message)
    })

    const boutonPagePrecedente = wrapper.find('.v-btn')
    boutonPagePrecedente.trigger('click')
  })
})
