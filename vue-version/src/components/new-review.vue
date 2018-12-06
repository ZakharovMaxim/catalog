<template>
  <div class='row flex-column align-items-center new-review'>
    <error-message :text='error' v-if='error' />
    <div class="success" v-if='success'>Отзыв успешно добавлен</div>
    <review-stars :selectable='true' @select='setStars' :stars='rate'/>
    <textarea placeholder='Оставьте Ваш отзыв' v-model='text' @keydown.prevent.enter='submit'></textarea>
    <btn-primary :text='"Добавить"' @click='submit' :loading='loading'/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import reviewStars from './review-stars'
import errorMessage from './error-message'
import btnPrimary from './buttons/btn-primary'

export default {
  name: 'new-review',
  components: {reviewStars, btnPrimary, errorMessage},
  data () {
    return {
      rate: 0,
      text: '',
      error: null,
      success: null,
      loading: false
    }
  },
  props: {
    product_id: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions(['newReview']),
    setStars (n) {
      this.rate = n
    },
    submit () {
      if (!this.text.trim()) {
        this.error = 'Такой отзыв можете оставить себе'
        return
      }
      this.loading = true
      this.newReview({rate: this.rate, text: this.text, product: this.product_id}).then(() => {
        this.success = true
        this.text = ''
        this.rate = 0
        this.loading = false
        this.error = null
        setTimeout(() => {
          this.success = false
        }, 1000)
      }).catch(e => {
        this.error = e.message || 'Ошибка ввода данных'
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  textarea
    resize: none
    font-family: inherit
    width: 300px
    padding: 10px
    margin-bottom: 10px
  .new-review
    margin-bottom: 15px
  .success
    color: #228b22
    font-size: 10px
</style>
