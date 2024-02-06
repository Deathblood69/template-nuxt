import {describe, expect, test} from 'vitest'
import {mount} from '@vue/test-utils'
import AppList from '../../src/components/AppList.vue'
import {vuetify} from '~/plugins/vuetify'

describe('Tests du composant AppErreur', () => {
  test('Affichage de la page', () => {
    const wrapper = mount(AppList, {
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper).toBeDefined()
  })
})
