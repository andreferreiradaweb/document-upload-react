export const getBase64 = (file: File) => {
  return new Promise((resolve) => {
    let baseURL = ''
    // Make new FileReader
    const reader = new FileReader()

    // Convert the file to base64 text
    reader.readAsDataURL(file)

    // on reader load somthing...
    reader.onload = () => {
      // Make a fileInfo Object
      baseURL = reader.result
      console.log(baseURL)
      resolve(baseURL)
    }
  })
}

export const getBlobFromBase64 = (data: string) => {
  // Cut the prefix `data:application/pdf;base64` from the raw base 64
  const base64WithoutPrefix = data.substr(`data:application/pdf;base64,`.length)

  const bytes = atob(base64WithoutPrefix)
  let length = bytes.length
  const out = new Uint8Array(length)

  while (length--) {
    out[length] = bytes.charCodeAt(length)
  }

  return new Blob([out], { type: 'application/pdf' })
}
