<template>
  <div class="form__input">
    <div class="form__label" v-if='label' :class='{"form__label-active": active}'>{{label}}</div>
    <input :type="currentType" @input='input' @focus='active = true' @blur='active = false' :value='value' @keydown.enter='submit'/>
    <error-message v-if='error' :text='error' />
    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg" v-if='secure' :class='{"active": showSymbols}' @click='secureToggle'>
      <path d="M7.5 0C4.63409 0 2.03513 1.56705 0.117367 4.11236C-0.0391224 4.32089 -0.0391224 4.61222 0.117367 4.82075C2.03513 7.36912 4.63409 8.93617 7.5 8.93617C10.3659 8.93617 12.9649 7.36912 14.8826 4.82381C15.0391 4.61528 15.0391 4.32395 14.8826 4.11542C12.9649 1.56705 10.3659 0 7.5 0ZM7.70558 7.61445C5.80316 7.73405 4.23213 6.167 4.35179 4.26262C4.44998 2.6925 5.72338 1.41985 7.29442 1.32172C9.19684 1.20212 10.7679 2.76917 10.6482 4.67355C10.5469 6.2406 9.27355 7.51325 7.70558 7.61445ZM7.61046 6.16087C6.58561 6.22527 5.73872 5.38194 5.80623 4.35769C5.85839 3.5113 6.54572 2.82744 7.39261 2.77224C8.41746 2.70784 9.26435 3.55116 9.19684 4.57542C9.14161 5.42487 8.45428 6.10873 7.61046 6.16087Z" fill="#C4C4C4"/>
    </svg>
  </div>
</template>

<script>
import errorMessage from './error-message'
export default {
  name: 'custom-input',
  data () {
    return {
      secure: this.type === 'password',
      showSymbols: false,
      active: false
    }
  },
  methods: {
    input (e) {
      this.$emit('input', e.target.value)
    },
    secureToggle () {
      this.showSymbols = !this.showSymbols
    },
    submit () {
      this.$emit('submit')
    }
  },
  computed: {
    currentType () {
      return !this.secure ? this.type : this.showSymbols ? 'text' : this.type
    }
  },
  props: {
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    error: String,
    value: String
  },
  components: {errorMessage}
}
</script>

<style lang="sass" scoped>
.form__input
  margin-bottom: 25px
  position: relative
.form__label
  text-align: left
  text-transform: uppercase
  font-size: 10px
  font-weight: 700
  color: $light-gray
  transition: all .2s
  &-active
    transform: translateY(-10px)
    color: #000
input
  background: transparent
  border: 0
  border-bottom: 1px solid $light-gray
  padding-top: 10px
  width: 100%
  transition: border-bottom-color .2s
  margin-bottom: 5px
  &:focus
    border-bottom-color: #000
    outline: none
svg
  cursor: pointer
  position: absolute
  top: 50%
  right: 5px
  transform: translateY(-50%)
  &.active
    path
      fill: #000
</style>
