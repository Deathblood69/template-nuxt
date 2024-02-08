import {describe, expect, test} from 'vitest'
import {mount} from '@vue/test-utils'
import layout from '../../src/layouts/default.vue'
import {vuetify} from '~/plugins/vuetify'

describe('Tests de la page de layout par défaut', () => {
  test('Affichage de la page', async () => {
    const wrapper = mount(layout, {
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper).toBeDefined()
  })
  test('Changement du theme de la page', async () => {
    const wrapper = mount(layout, {
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.classes()).toContain('v-theme--light')

    const appBarBtn = wrapper.findAll('button')
    const themeBtn = appBarBtn.find((e) =>
      e.html().includes('mdi-theme-light-dark'),
    )

    themeBtn?.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.classes()).toContain('v-theme--dark')
  })
  test("Déconnexion de l'application", async () => {
    const wrapper = mount(layout, {
      global: {
        plugins: [vuetify],
      },
    })

    const appBarBtn = wrapper.findAll('button')
    const logoutBtn = appBarBtn.find((e) => e.html().includes('mdi-logout'))

    logoutBtn?.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper).toBeDefined()
  })
  test("Ouverture d'un lien du menu", async () => {
    const wrapper = mount(layout, {
      global: {
        plugins: [vuetify],
      },
    })

    const appBarBtn = wrapper.findAll('button')
    const logoutBtn = appBarBtn.find((e) => e.html().includes('mdi-menu'))

    logoutBtn?.trigger('click')
    await wrapper.vm.$nextTick()

    const appBarLien = wrapper.findAll('.v-list-item')
    const logoutLien = appBarLien.find((e) => e.html().includes('Compte'))

    logoutLien?.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper).toBeDefined()
  })
})
