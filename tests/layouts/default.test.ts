import {describe, expect, test} from 'vitest'
import {mount} from '@vue/test-utils'
import layout from '../../src/layouts/default.vue'
import {vuetify} from '~/plugins/vuetify'

describe('Tests de la page de layout par défaut', () => {
  test('Affichage de la page', () => {
    const wrapper = mount(layout, {
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper).toBeDefined()
  })
})
