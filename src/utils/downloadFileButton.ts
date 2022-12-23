import { getBase64, getBlobFromBase64 } from './getBase64'

export const downloadFromFile = async (file: File) => {
  // using Java Script method to get PDF file
  const base64 = await getBase64(file)
  const base64Url = URL.createObjectURL(getBlobFromBase64(base64 as string))
  fetch(base64Url).then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob)
      // Setting various property values
      const alink = document.createElement('a')
      alink.href = fileURL
      alink.download = String(base64)
      alink.click()
    })
  })
}
