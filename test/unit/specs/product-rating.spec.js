import Vue from 'vue'
import productRating from '@/components/product-rating'
const test = {
  items: {
    'средне': 4,
    'норм': 2
  },
  totalCount: 6,
  totalRating: 8
}
// rating__item-percent
function getAverage (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData}).$mount()
  return vm.$el.querySelector('.rating__average-total').textContent.trim()
}
function getWidth (Component, propsData, n = 0) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData}).$mount()
  const el = vm.$el.querySelectorAll('.rating__item-percent')[n]
  return el ? parseFloat(el.querySelector('.fill').style['width']).toFixed(4) : null
}
describe('product-rating.vue', () => {
  it('render correctly average value', () => {
    expect(getAverage(productRating, {rating: test})).to.equal('' + +(test.totalRating / test.totalCount).toFixed(1))
    expect(getAverage(productRating, {rating: {}})).to.equal('0')
  })
  it('correctly set rates width', () => {
    expect(getWidth(productRating, {rating: test})).to.equal('' + (test.items['средне'] / test.totalCount * 100).toFixed(4))
    expect(getWidth(productRating, {rating: test}, 1)).to.equal('' + (test.items['норм'] / test.totalCount * 100).toFixed(4))
    expect(getWidth(productRating, {rating: {}})).to.equal(null)
  })
})
