import Vue from 'vue'
import productCard from '@/components/product-card'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/product/:id'
    }
  ]
})
function getLink (product) {
  const Constructor = Vue.extend(productCard)
  const vm = new Constructor({
    propsData: {
      product
    },
    router
  }).$mount()
  let link = vm.$el.querySelector('.product__action a').href.split('/')
  return +link.pop()
}
const product = {
  id: 1
}
describe('product-card.vue', () => {
  it('product.id should be equal id in the product link', () => {
    expect(getLink(product)).to.equal(1)
  })
})
