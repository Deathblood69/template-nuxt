import {describe, expect, test} from 'vitest'
import {shallowMount} from '@vue/test-utils'
import index from '../../src/components/AppBar.vue'
import {vuetify} from '~/plugins/vuetify'

describe('Tests de la page index global', () => {
  test('Affichage de la page', () => {
    const wrapper = shallowMount(index, {
      props: {
        items: [],
      },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper).toBeDefined()

    console.log(wrapper.html())
  })
})
