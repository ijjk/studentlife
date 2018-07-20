const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const addZero = digit => {
  digit += ''
  return digit.length === 1 ? '0' + digit : digit
}

export const getDateFromVal = val => {
  val = val.split('-')
  val[1] = val[1].replace('0', '')
  val = val.join('-')
  return new Date(val)
}

const getDate = (d = new Date(), noTime = false) => {
  d = d instanceof Date ? d : new Date(d)

  let str = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`

  if (!noTime) {
    let period = 'AM'
    let hour = d.getHours()
    let min = d.getMinutes()

    if (hour > 11) {
      hour = hour > 12 ? hour - 12 : hour
      period = 'PM'
    } else if (hour === 0) {
      hour = '12'
    }
    // hour = addZero(hour)
    min = addZero(min)
    str += ` ${hour}:${min} ${period}`
  }
  return str
}

export default getDate
