import Vue from 'vue'
import errorMessage from '@/components/error-message'

function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent.trim()
}

describe('error-message.vue', () => {
  it('render correctly with different props', () => {
    expect(getRenderedText(errorMessage, {
      text: 'Some error'
    })).to.equal('Some error')
    expect(getRenderedText(errorMessage)).to.equal('')
  })
})
