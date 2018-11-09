/**
 * get pagetitle component`s field
 * @param {VueComponent} vm
 * @returns {String} pagetitle
 */
function getTitle (vm) {
  const { pagetitle } = vm.$options
  if (pagetitle) {
    return typeof pagetitle === 'function'
      ? pagetitle.call(vm)
      : pagetitle
  }
}

export default {
  created () {
    const pagetitle = getTitle(this)
    if (pagetitle) {
      document.title = pagetitle
    }
  }
}
