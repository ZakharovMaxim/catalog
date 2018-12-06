import Vue from 'vue'
import btnSecondary from '@/components/buttons/btn-secondary'

function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.querySelector('span:first-child').textContent
}

describe('btn-secondary.vue', () => {
  it('render correctly with different props', () => {
    expect(getRenderedText(btnSecondary, {
      text: 'Добавить'
    })).to.equal('Добавить')
    expect(getRenderedText(btnSecondary)).to.equal('Кнопка')
    expect(getRenderedText(btnSecondary), {
      text: ''
    }).to.equal('Кнопка')
  })
})
