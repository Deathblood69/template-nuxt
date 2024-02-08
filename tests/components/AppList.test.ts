import {describe, expect, test} from 'vitest'
import {mount} from '@vue/test-utils'
import AppList from '../../src/components/AppList.vue'
import {vuetify} from '~/plugins/vuetify'

describe('Tests du composant AppList', () => {
  test('Affichage de la page', () => {
    const wrapper = mount(AppList, {
      props: {
        items: [],
      },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper).toBeDefined()

    const list = wrapper.find('.v-list')
    const items = list.findAll('.v-list-item')
    expect(items.length).toEqual(0)
  })
  test('Affichage de deux items', () => {
    const wrapper = mount(AppList, {
      props: {
        items: [
          {
            icon: 'mdi-home',
            libelle: 'Home',
            path: '/home',
            active: true,
          },
        ],
      },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper).toBeDefined()

    const list = wrapper.find('.v-list')
    const items = list.findAll('.v-list-item')
    expect(items.length).toEqual(1)
  })
  test("Changement de l'item actif", async () => {
    const items = [
      {
        icon: 'mdi-home',
        libelle: 'Home',
        path: '/home',
        active: true,
      },
      {
        icon: 'mdi-account-circle',
        libelle: 'Account',
        path: '/account',
        active: false,
      },
    ]
    const wrapper = mount(AppList, {
      props: {
        items: items,
      },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper).toBeDefined()

    const list = wrapper.find('.v-list')
    const getItems = list.findAll('.v-list-item')
    const [home, account] = getItems

    expect(getItems.length).toEqual(2)

    // Vérifie si item home à la classe v-list-item--active
    expect(home.classes()).toContain('v-list-item--active')
    // Vérifie si item account n'a pas la classe v-list-item--active
    expect(account.classes()).not.toContain('v-list-item--active')

    await getItems[1].trigger('click')

    // catch emit
    expect(wrapper.emitted()).toHaveProperty('navigate')
    const newPath = wrapper.emitted().navigate as Array<Array<string>>

    const newItems = items.map((e) => ({
      ...e,
      active: e.path === newPath[0][0],
    }))

    expect(newItems[1].active).toBeTruthy()
    await wrapper.setProps({items: newItems})

    // Vérifie si item home à la classe v-list-item--active
    expect(home.classes()).not.toContain('v-list-item--active')
    // Vérifie si item account n'a pas la classe v-list-item--active
    expect(account.classes()).toContain('v-list-item--active')
  })
})
