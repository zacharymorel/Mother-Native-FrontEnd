import moment from 'moment'

export function averageFrequency(array, key) {
  let sum = 0
  for (let i = 0; i < (array.length-1); i++) {
    let a = moment((array[i]).key)
    let b = moment((array[i+1]).key)
    let dif = b.diff(a, 'minutes')
    sum += dif
  }
  let avg = sum/(array.length)
  let str = avg.toString()
  let answer = str.slice(0, ((avg.indexOf('.'))+1))
  return answer
}
