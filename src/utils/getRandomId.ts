export const getRandomId = () => {
  return Math.floor(Date.now() * Math.random()).toString(36)
}
