export function getDate() {
  const date = new Date()

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  if (month < 10) {
    return `${year}/0${month}/${day}`
  } else {
    return `${year}/${month}/${day}`
  }
}
