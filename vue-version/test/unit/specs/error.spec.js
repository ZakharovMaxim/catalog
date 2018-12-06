import Vue from 'vue'
import error from '@/components/error'

function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('error.vue', () => {
  it('render correctly with different props', () => {
    expect(getRenderedText(error, {
      text: 'Some error'
    })).to.equal('Some error')
    expect(getRenderedText(error)).to.equal('Ошибка')
  })
})
