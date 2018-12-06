export default {
  'alphabetic': {
    text: 'А-Я',
    callback (a, b) {
      return a.title > b.title ? 1 : -1
    }
  },
  'alphabetic-reverse': {
    text: 'Я-А',
    callback (a, b) {
      return a.title > b.title ? -1 : 1
    }
  },
  'random': {
    text: 'случайно',
    callback (a, b) {
      return Math.random() - 0.5
    }
  }
}
