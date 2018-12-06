import Vue from 'vue'
import sortList from '@/components/sort-list'
const propsData = {
  list: {
    f1: {
      text: 'f1'
    },
    f2: {
      text: 'f2'
    }
  }
}
function getSortsCount (Component, sort) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({
    propsData,
    computed: {
      sort () {
        return sort
      }
    }
  }).$mount()
  return vm.$el.getElementsByTagName('li').length
}
function getActiveSort (Component, sort) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({
    propsData,
    computed: {
      sort () {
        return sort
      }
    }
  }).$mount()
  return vm.$el.querySelector('li.active').textContent.trim()
}

function getFilterByClick (Component, sort) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({
    propsData,
    computed: {
      sort () {
        return sort
      }
    },
    methods: {
      setSort (sort) {
        this.activeSort = sort
      }
    }
  }).$mount()
  vm.$el.querySelector('li:first-child').click()
  return vm.activeSort
}
describe('sort-list', () => {
  it('render correctly sorts count', () => {
    expect(getSortsCount(sortList)).to.equal(2)
  })
  it('correctly set active sort', () => {
    expect(getActiveSort(sortList, 'f1')).to.equal('f1')
  })
  it('correctly set active sort by click', () => {
    expect(getFilterByClick(sortList, 'f1')).to.equal('f1')
  })
})
