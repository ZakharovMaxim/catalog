import Vue from 'vue'
import authTrigger from '@/components/auth-trigger'

function getRenderedText (Component, token) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({
    computed: {
      token () {
        return token
      }
    }
  }).$mount()
  return vm.$el.querySelector('span').textContent
}

describe('auth-trigger.vue', () => {
  it('render correctly with different tokens', () => {
    expect(getRenderedText(authTrigger)).to.equal('Войти')
    expect(getRenderedText(authTrigger, true)).to.equal('Выйти')
  })
})
