import Vue from 'vue'
import customInput from '@/components/custom-input'

function getLabel (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData}).$mount()
  const label = vm.$el.querySelector('.form__label')
  return (label && label.textContent) || label
}

function getSecureSymbol (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData}).$mount()
  const svg = vm.$el.querySelector('svg')
  return !!svg
}

function getCurrentType (Component, propsData, data) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData, data () { return data }}).$mount()
  const input = vm.$el.querySelector('input')
  return input.type
}
describe('custom-input.vue', () => {
  it('render correctly labels', () => {
    expect(getLabel(customInput)).to.equal(null)
    expect(getLabel(customInput, {
      label: 'Лейбл'
    })).to.equal('Лейбл')
  })

  it('render secure symbol', () => {
    expect(getSecureSymbol(customInput)).to.equal(false)
    expect(getSecureSymbol(customInput, {
      type: 'password'
    })).to.equal(true)
  })

  it('set correctly input type', () => {
    expect(getCurrentType(customInput), {
      type: 'text'
    }).to.equal('text')
    expect(getCurrentType(customInput, {
      type: 'password'
    })).to.equal('password')
    expect(getCurrentType(customInput, {
      type: 'password'
    }, {
      showSymbols: true
    })).to.equal('text')
  })
})
