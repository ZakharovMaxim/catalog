import Vue from 'vue'
import loadingComponent from '@/components/loading-component'

function getState (vm) {
  return {
    loading: vm.loading,
    error: vm.error
  }
}
function callback () {
  return new Promise((resolve, reject) => {
    resolve()
  })
}
function callbackFail (error) {
  return new Promise((resolve, reject) => {
    reject(new Error(error))
  })
}
describe('loading-component.vue', () => {
  it('set state of component correctly with resolved promise', (done) => {
    const Constructor = Vue.extend(loadingComponent)
    const vm = new Constructor({
      propsData: {
        callback
      },
      created () {
      }
    }).$mount()
    let state = getState(vm)
    expect(state.loading).to.equal(true)
    expect(state.error).to.equal(null)
    vm.callback().then(() => {
      state = getState(vm)
      expect(state.loading).to.equal(false)
      expect(state.error).to.equal(null)
      done()
    })
  })
  it('set state of component correctly with rejected promise', (done) => {
    const Constructor = Vue.extend(loadingComponent)
    const vm = new Constructor({
      propsData: {
        callback: () => callbackFail('error :(')
      },
      created () {
      }
    }).$mount()
    let state = getState(vm)
    expect(state.loading).to.equal(true)
    expect(state.error).to.equal(null)
    vm.callback().then(() => {
      done()
    }).catch(e => {
      state = getState(vm)
      expect(state.loading).to.equal(false)
      expect(state.error).to.equal('error :(')
      done()
    })
  })
  it('set default error message', (done) => {
    const Constructor = Vue.extend(loadingComponent)
    const vm = new Constructor({
      propsData: {
        callback: callbackFail
      },
      created () {
      }
    }).$mount()
    let state = getState(vm)
    expect(state.loading).to.equal(true)
    expect(state.error).to.equal(null)
    vm.callback().then(() => {
      done()
    }).catch(e => {
      state = getState(vm)
      expect(state.loading).to.equal(false)
      expect(state.error).to.equal('Что-то пошло не так :(')
      done()
    })
  })
})
