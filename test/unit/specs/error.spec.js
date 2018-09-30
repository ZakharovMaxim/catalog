import Vue from 'vue'
import error from '@/components/error'

describe('error.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(error)
    const vm = new Constructor({
      propsData: {
        text: 'Some error'
      }
    }).$mount()

    expect(vm.$el.innerText)
      .to.equal('Some error')
  })
})
