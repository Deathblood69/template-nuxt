import {describe, expect, test} from 'vitest'
import {mount} from '@vue/test-utils'
import index from '../../src/app.vue'
import {vuetify} from '~/plugins/vuetify'

describe("Tests de la page d'erreur", () => {
  test('Affichage de la page', () => {
    const wrapper = mount(index, {
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper).toBeDefined()
  })
})
