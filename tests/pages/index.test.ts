import {describe, expect, test} from 'vitest'
import {mount} from '@vue/test-utils'
import index from '../../src/pages/index.vue'
import {vuetify} from '~/plugins/vuetify'

describe('Tests de la page index global', () => {
  test('Affichage de la page', () => {
    const wrapper = mount(index, {
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper).toBeDefined()
  })
})
