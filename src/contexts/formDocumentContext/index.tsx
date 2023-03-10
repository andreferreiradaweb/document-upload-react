import { ChangeEvent, createContext, useContext, useState } from 'react'
import { Notify, NotifyTypes } from '../../components/Notify'
import { getFileRenamed } from '../../utils/getFileRenamed'
import { getRandomId } from '../../utils/getRandomId'
import { initialDocumentValues } from './data'
import {
  DocumentType,
  FormDocumentContextTypes,
  FormDocumentProviderProps,
  HandleOpenReaderTypes,
} from './types'

const FormDocumentContext = createContext({} as FormDocumentContextTypes)

export const FormDocumentProvider = ({
  children,
}: FormDocumentProviderProps) => {
  const [documents, setDocuments] = useState<DocumentType[]>([])
  const [isModalEdit, setIsModalEdit] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isModalReaderOpen, setIsModalReaderOpen] = useState<boolean>(false)
  const [base64PdfFile, setBase64PdfFile] = useState<string | null>(null)
  const [currentDocument, setCurrentDocument] = useState<DocumentType>(
    initialDocumentValues
  )

  const handleToggleModal = () => {
    if (isModalEdit) {
      return setIsModalOpen((oldValue) => !oldValue)
    }
    setIsModalOpen((oldValue) => !oldValue)
    setCurrentDocument(initialDocumentValues)
  }

  const handleToggleModalReader = () => {
    if (!isModalReaderOpen) {
      return setIsModalReaderOpen((oldValue) => !oldValue)
    }
    setIsModalReaderOpen((oldValue) => !oldValue)
    setCurrentDocument(initialDocumentValues)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDocument({
      ...currentDocument,
      [event.target.name]: event.target.value,
    })
  }

  const handleInputDocumentChange = ({
    currentTarget: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!files || !files.length) {
      return Notify(
        NotifyTypes.ERROR,
        'Algo deu errado com o documento, por favor tente novamente!'
      )
    }
    const newFile = getFileRenamed({
      originalFile: files[0],
      newName: currentDocument.fileName,
    })
    const newDocument = {
      id: currentDocument.id ?? getRandomId(),
      title: currentDocument.title,
      description: currentDocument.description,
      fileName: currentDocument.fileName,
      date: null,
      file: currentDocument.fileName ? newFile : files[0],
    }
    setCurrentDocument(newDocument)
  }

  const handleDeleteDocument = (documentId: string) => {
    if (!documents) return
    const newDocuments = documents.filter(
      (document: DocumentType) => document.id !== documentId
    )
    setDocuments(newDocuments)
    Notify(NotifyTypes.SUCCESS, 'Documento deletado com sucesso!')
  }

  function getBase64FromFile(file: File) {
    if (!file) return
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = (e) => {
      if (typeof e.target?.result !== 'string') return
      setBase64PdfFile(e.target?.result)
    }
  }

  const handleOpenReader = ({ file, documentId }: HandleOpenReaderTypes) => {
    const document = documents?.find((document) => document.id === documentId)
    if (!document) return
    getBase64FromFile(file)
    setCurrentDocument({ ...document })
    handleToggleModalReader()
  }

  const handleEditDocument = (documentId: string) => {
    const document = documents?.find((document) => document.id === documentId)
    if (!document) return
    setIsModalEdit(() => true)
    handleToggleModal()
    setCurrentDocument({ ...document, date: null })
  }

  const isFormValid = ({
    file,
    title,
    description,
  }: Omit<DocumentType, 'id' | 'date' | 'fileName'>) => {
    if (!file) {
      Notify(NotifyTypes.ERROR, 'Voc?? esqueceu de inserir um documento!')
      return false
    }

    if (!title) {
      Notify(NotifyTypes.ERROR, 'Voc?? precisa escolher um t??tulo!')
      return false
    }

    if (title.length >= 100) {
      Notify(
        NotifyTypes.ERROR,
        'Quantidade de caracteres inv??lida(maximo permitido: 100)!'
      )
      return false
    }

    if (description.length >= 2000) {
      Notify(
        NotifyTypes.ERROR,
        'Quantidade de caracteres inv??lida(maximo permitido: 2000)!'
      )
      return false
    }
    return true
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { title, description, file, id, fileName } = currentDocument

    if (!isFormValid({ title, description, file })) return
    const documentsFiltered = documents?.filter(
      (document) => document.id !== id
    )

    if (!file) return
    const newFile = getFileRenamed({
      originalFile: file,
      newName: fileName,
    })

    setDocuments(() => [
      ...documentsFiltered,
      { ...currentDocument, date: new Date(), file: newFile },
    ])
    setCurrentDocument(initialDocumentValues)
    handleToggleModal()
    if (!isModalEdit) {
      Notify(NotifyTypes.SUCCESS, 'Documento adicionado com sucesso!')
      return setIsModalEdit(() => false)
    }
    Notify(NotifyTypes.SUCCESS, 'Documento editado com sucesso!')
    setIsModalEdit(() => false)
  }

  const contextValues = {
    handleChange,
    handleSubmit,
    currentDocument,
    documents,
    handleInputDocumentChange,
    handleToggleModal,
    isModalOpen,
    handleDeleteDocument,
    handleEditDocument,
    base64PdfFile,
    handleToggleModalReader,
    isModalReaderOpen,
    handleOpenReader,
  }

  return (
    <FormDocumentContext.Provider value={contextValues}>
      {children}
    </FormDocumentContext.Provider>
  )
}

export const useFormDocumentContext = () => {
  const context = useContext(FormDocumentContext)
  if (!context) {
    throw new Error(
      'useFormDocumentContext must be used with a FormDocumentProvider'
    )
  }
  return context
}
