import Vue from 'vue'
import review from '@/components/review'
import {formatDate} from '@/tools/moment'

const test = {
  created_by: {
    username: 'user'
  },
  created_at: new Date(),
  text: 'review'
}

function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData }).$mount()
  const name = vm.$el.querySelector('.review__name').textContent.trim()
  const date = vm.$el.querySelector('.review__date').textContent.trim()
  const text = vm.$el.querySelector('.review__text').textContent.trim()
  return [name, date, text].join(' ')
}

describe('review.vue', () => {
  it('render correctly with different props', () => {
    expect(getRenderedText(review, {
      review: test
    })).to.equal([test.created_by.username, formatDate(test.created_at), test.text].join(' '))
  })
})
