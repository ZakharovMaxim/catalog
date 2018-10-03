import Vue from 'vue'
import btnPrimary from '@/components/buttons/btn-primary'

function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.querySelector('span:first-child').textContent
}

describe('btn-primary.vue', () => {
  it('render correctly with different props', () => {
    expect(getRenderedText(btnPrimary, {
      text: 'Добавить'
    })).to.equal('Добавить')
    expect(getRenderedText(btnPrimary)).to.equal('Кнопка')
    expect(getRenderedText(btnPrimary), {
      text: ''
    }).to.equal('Кнопка')
  })
})
