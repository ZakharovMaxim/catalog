import vue from 'vue'
import newReview from '@/components/new-review'

function getState (data) {
  const Constructor = vue.extend(newReview)
  const vm = new Constructor({
    data () {
      return data
    },
    propsData: {
      product_id: 1
    }
  }).$mount()
  return {
    error: !!vm.$el.querySelector('.error'),
    success: !!vm.$el.querySelector('.success')
  }
}

function sendForm () {
  const Constructor = vue.extend(newReview)
  const vm = new Constructor({
    propsData: {
      product_id: 1
    }
  }).$mount()
  vm.submit()
  return !!vm.error
}
describe('new-review.vue', () => {
  it('should render correctly with different data', () => {
    let state = getState({success: true})
    expect(state.success).to.equal(true)
    expect(state.error).to.equal(false)
    state = getState({error: 'Ошибка'})
    expect(state.success).to.equal(false)
    expect(state.error).to.equal(true)
  })
  it('should not send form with empty text', () => {
    expect(sendForm()).to.equal(true)
  })
})
