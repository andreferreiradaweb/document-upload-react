type GetFileRenamedTypes = {
  originalFile: File
  newName: string
}

export const getFileRenamed = ({
  originalFile,
  newName,
}: GetFileRenamedTypes) => {
  return new File(
    [originalFile],
    newName.replace(/[^a-zA-Z]/g, '').concat('.pdf'),
    {
      type: originalFile.type,
      lastModified: originalFile.lastModified,
    }
  )
}
