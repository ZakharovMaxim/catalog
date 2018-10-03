exports.formatDate = (date) => {
  const realDate = new Date(date)
  let day = realDate.getDate().toString()
  day = day.length < 2 ? '0' + day : day
  const month = monthes[realDate.getMonth()].slice(0, 3)
  return day + ' ' + month
}
const monthes = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
