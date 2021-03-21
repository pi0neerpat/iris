export const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

export const truncate = (text, length = 50) => {
  if (typeof text !== 'string') return ''
  return text.substring(0, length) + '...'
}
