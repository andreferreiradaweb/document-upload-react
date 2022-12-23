export function getBase64FromFile(file: File) {
  if (!file) return
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = (e) => {
    if (typeof e.target?.result !== 'string') return
    return e.target?.result
  }
}
