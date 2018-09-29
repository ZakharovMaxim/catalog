<template>
  <div class="info" :style='{"background-image": `url(${bg})`}'>
    <div class="info__title">{{data.title}}</div>
    <div class="info__text">{{data.text}}</div>
    <div class="info__action">
      <btn-secondary @click='$emit("changeDirection")' :text='data.button' />
    </div>
  </div>
</template>

<script>
import bg from '@/assets/form_bg.png'
import btnSecondary from './buttons/btn-secondary'
export default {
  name: 'form-info',
  data () {
    return {
      bg,
      text: [
        {
          title: 'Еще не с нами!',
          text: 'Давайте в нашу уютную осминожную компанию. Проводить вечера как брюзга оценивая всякие полезные *что угодно*.',
          button: 'Регистрация'
        },
        {
          title: 'Уже с нами!',
          text: 'Сочувствую вам, вас уже не спасти. Напишите мне на почту, я вышлю контакты психолога, очень хорошая женщина',
          button: 'Войти'
        }
      ]
    }
  },
  computed: {
    data () {
      return this.text[+!!this.reverse]
    }
  },
  props: ['reverse'],
  components: {btnSecondary}
}
</script>

<style lang="sass" scoped>
  .info
    background-size: cover
    padding: 91px 25px 80px 25px
    color: #fff
    background: #000
    &__title
      font-size: 32px
      font-weight: bold
      margin-bottom: 65px
      text-align: center
    &__text
      font-size: 16px
      margin-bottom: 80px
      font-weight: 500
    &__action
      text-align: center
</style>
