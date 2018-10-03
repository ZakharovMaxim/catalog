import Vue from 'vue'
import formInfo from '@/components/form-info'
const text = formInfo.data().text

function getRenderedTitle (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData}).$mount()
  return vm.$el.querySelector('.info__title').textContent.trim()
}
function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData}).$mount()
  return vm.$el.querySelector('.info__text').textContent.trim()
}
function getRenderedButton (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData}).$mount()
  return vm.$el.querySelector('button').textContent.trim()
}

describe('form-info.vue', () => {
  it('render correctly title', () => {
    expect(getRenderedTitle(formInfo)).to.equal(text[0].title)
    expect(getRenderedTitle(formInfo, {reverse: true})).to.equal(text[1].title)
  })
  it('render correctly text', () => {
    expect(getRenderedText(formInfo)).to.equal(text[0].text)
    expect(getRenderedText(formInfo, {reverse: true})).to.equal(text[1].text)
  })
  it('render correctly btn', () => {
    expect(getRenderedButton(formInfo)).to.equal(text[0].button)
    expect(getRenderedButton(formInfo, {reverse: true})).to.equal(text[1].button)
  })
})
