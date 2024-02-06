import {describe, expect, test} from 'vitest'
import {mount} from '@vue/test-utils'
import AppErreur from '../../src/components/AppErreur.vue'
import {vuetify} from '~/plugins/vuetify'

describe('Tests du composant AppErreur', () => {
  test('Affichage de la page', () => {
    const wrapper = mount(AppErreur, {
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper).toBeDefined()
  })
})
