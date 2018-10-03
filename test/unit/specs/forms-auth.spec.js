import Vue from 'vue'
import formAuth from '@/components/forms-auth'
const titles = formAuth.data().titles

function getRenderedTitle (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData}).$mount()
  return vm.$el.querySelector('.form__title').textContent.trim()
}

describe('forms-auth.vue', () => {
  it('render correctly toggler text', () => {
    expect(getRenderedTitle(formAuth)).to.equal(titles[0])
    expect(getRenderedTitle(formAuth, {reverse: true})).to.equal(titles[1])
  })
})
