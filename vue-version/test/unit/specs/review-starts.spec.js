import Vue from 'vue'
import reviewStars from '@/components/review-stars'

function getFillRectWidth (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData }).$mount()
  return vm.width
}
function getClassName (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData }).$mount()
  return vm.$el.querySelector('g').classList[0]
}
describe('review-stars.vue', () => {
  it('render correctly fill the stars', () => {
    expect(getFillRectWidth(reviewStars, {stars: 5})).to.equal('100%')
    expect(getFillRectWidth(reviewStars, {stars: 4})).to.equal('80%')
    expect(getFillRectWidth(reviewStars, {stars: 3})).to.equal('60%')
    expect(getFillRectWidth(reviewStars, {stars: 2})).to.equal('40%')
    expect(getFillRectWidth(reviewStars, {stars: 1})).to.equal('20%')
    expect(getFillRectWidth(reviewStars, {stars: 0})).to.equal('0%')
  })
  it('correctly set className', () => {
    expect(getClassName(reviewStars, {stars: 5})).to.equal('selected-5')
    expect(getClassName(reviewStars, {stars: 4})).to.equal('selected-4')
    expect(getClassName(reviewStars, {stars: 3})).to.equal('selected-3')
    expect(getClassName(reviewStars, {stars: 2})).to.equal('selected-2')
    expect(getClassName(reviewStars, {stars: 1})).to.equal('selected-1')
    expect(getClassName(reviewStars, {stars: 0})).to.equal('selected-0')
  })
  it('methods works correctly', () => {
    const Constructor = Vue.extend(reviewStars)
    const vm = new Constructor({
      propsData: {
        stars: 0
      }
    }).$mount()
    vm.hover(5)
    expect(vm.starsCount).to.equal(0)
    vm.select(4)
    expect(vm.starsCount).to.equal(0)
    vm.leave()
    expect(vm.starsCount).to.equal(0)
    vm.selectable = true
    vm.hover(5)
    expect(vm.starsCount).to.equal(5)
    vm.leave()
    expect(vm.starsCount).to.equal(0)
    vm.select(5)
    vm.stars = 5
    expect(vm.starsCount).to.equal(5)
    vm.hover(2)
    expect(vm.starsCount).to.equal(5)
  })
})
