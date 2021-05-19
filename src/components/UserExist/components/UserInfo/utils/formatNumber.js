export function formatNumber (num) {
  if (num >= 1000) {
    let result
    const newNum = num / 1000
    const lastDigit = newNum.toFixed(1).toString().split('').pop()

    if (Number(lastDigit) === 0) {
      result = `${(newNum).toFixed(0)}k`
    } else {
      result = `${(newNum).toFixed(1)}k`
    }

    return result
  }
  return num
}