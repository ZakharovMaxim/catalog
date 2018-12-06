// import Vue from 'vue'
// import productPage from '@/components/product-page'
// // ['productRating', 'product', 'token'])
// async function getTexts (computed) {
//   const Constructor = Vue.extend(productPage)
//   const vm = new Constructor({
//     computed: {
//       product () {
//         return computed.product
//       },
//       productRating () {
//         return computed.productRating
//       },
//       token () {
//         return computed.token
//       }
//     },
//     methods: {
//       callback () {
//         return () => {
//           return new Promise(resolve => resolve())
//         }
//       }
//     }
//   }).$mount()
//   let result = await vm.$nextTick()
//   const title = result.$el.querySelector('.product-page__title').textContent.trim()
//   const img = result.$el.querySelector('.product-page__img img').src
//   const text = result.$el.querySelector('.product-page__text').textContent.trim()
//   return [title, img, text].join(' ')
// }
// const product = {
//   id: 1,
//   title: 'product',
//   text: 'text',
//   reviews: [],
//   img: 'img'
// }
// const productRating = {}
// describe('product-page.vue', () => {
//   it('should render correctly', (done) => {
//     expect(getTexts({product, productRating})).to.equal([product.title, product.img, product.text].join(' '))
//     done()
//   })
// })
