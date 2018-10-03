import Vue from 'vue'
import VueRouter from 'vue-router'
import formsAuthContent from '@/components/forms-auth-content'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      name: 'test',
      path: '/'
    }
  ]
})
function getRenderedButton (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData}).$mount()
  return vm.$el.querySelector('button span').textContent.trim()
}
function getRenderedToggler (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData}).$mount()
  return vm.$el.querySelector('.form__changeDirection span').textContent.trim()
}

describe('forms-auth-content.vue', () => {
  it('render correctly toggler text', () => {
    expect(getRenderedToggler(formsAuthContent)).to.equal('регистрация')
    expect(getRenderedToggler(formsAuthContent, {reverse: true})).to.equal('авторизация')
  })
  it('render correctly btn', () => {
    expect(getRenderedButton(formsAuthContent)).to.equal('Авторизация')
    expect(getRenderedButton(formsAuthContent, {reverse: true})).to.equal('Регистрация')
  })
  it('methods works correctly', (done) => {
    const ChildInstance = Vue.extend({
      ...formsAuthContent
    })
    ChildInstance.extendOptions.methods.login = (payload) => {
      return new Promise((resolve, reject) => {
        resolve()
      })
    }
    ChildInstance.$router = {
      replace () {}
    }
    ChildInstance.extendOptions.methods.registration = (payload) => {
      return new Promise((resolve, reject) => {
        reject(new Error({
          status: 404,
          message: 'Ошибка'
        }))
      })
    }
    const parent = {
      template: `<div>
                  <forms-auth-content :reverse='reverse' @changeDirection='changeDirection'/>
                 </div>`,
      data () {
        return {
          reverse: false
        }
      },
      methods: {
        changeDirection () {
          this.reverse = !this.reverse
        }
      },
      components: {'forms-auth-content': ChildInstance}
    }
    const Constructor = Vue.extend(parent)
    const vm = new Constructor({router}).$mount()
    const child = vm.$children[0]
    child.submit()
    expect(child.Form.errors.get('username')).to.equal('Поле обязательно для заполнения')
    expect(child.Form.errors.get('password')).to.equal('Поле обязательно для заполнения')
    child.handleLogin('login')
    expect(child.Form.errors.get('username')).to.equal(undefined)
    child.handlePassword('login')
    expect(child.Form.errors.get('password')).to.equal(undefined)
    expect(child.Form.validations['passwordConfirm'].ignore).to.equal(true)
    child.changeDirection()
    child.$nextTick(function () {
      expect(child.Form.validations['passwordConfirm'].ignore).to.equal(false)
      child.handlePasswordConfirm('password-confirmed')
      expect(child.Form['passwordConfirm']).to.equal('password-confirmed')
      child.handlePassword('password')
      child.submit()
      expect(child.Form.errors.get('passwordConfirm')).to.equal(child.Form.validations['passwordConfirm'].confirm.errorMsg)
      child.changeDirection()
      child.$nextTick(function () {
        child.handlePassword('password')
        child.handleLogin('login92')
        child.submit()
        done()
      })
    })
  })
})
