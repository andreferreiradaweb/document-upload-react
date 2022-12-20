import { ChangeEvent, createContext, useContext, useState } from 'react'
import { Notify, NotifyTypes } from '../../components/Notify'
import { getFileRenamed } from '../../utils/getFileRenamed'
import { getRandomId } from '../../utils/getRandomId'
import { initialDocumentValues } from './data'
import {
  DocumentType,
  FormDocumentContextTypes,
  FormDocumentProviderProps,
  HandleToggleModalType,
} from './types'

const FormDocumentContext = createContext({} as FormDocumentContextTypes)

export const FormDocumentProvider = ({
  children,
}: FormDocumentProviderProps) => {
  const [documents, setDocuments] = useState<DocumentType[]>([])
  const [currentDocument, setCurrentDocument] = useState<DocumentType>(
    initialDocumentValues
  )
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleToggleModal = ({
    isModalEdit = false,
  }: HandleToggleModalType) => {
    if (isModalEdit) {
      return setIsModalOpen((oldValue) => !oldValue)
    }
    setCurrentDocument(initialDocumentValues)
    setIsModalOpen((oldValue) => !oldValue)
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
      id: getRandomId(),
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

  const handleEditDocument = (documentId: string) => {
    const document = documents?.find((document) => document.id === documentId)
    if (!document) return
    setCurrentDocument({
      id: document.id,
      title: document.title,
      description: document.description,
      fileName: document.fileName,
      file: document.file,
      date: null,
    })
    handleToggleModal({ isModalEdit: true })
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { title, description, file } = currentDocument
    if (!file)
      return Notify(NotifyTypes.ERROR, 'Você esqueceu de inserir um documento!')

    if (!title)
      return Notify(NotifyTypes.ERROR, 'Você precisa escolher um título!')

    if (title.length >= 100)
      return Notify(
        NotifyTypes.ERROR,
        'Quantidade de caracteres inválida(maximo permitido: 100)!'
      )

    if (description.length >= 2000)
      return Notify(
        NotifyTypes.ERROR,
        'Quantidade de caracteres inválida(maximo permitido: 2000)!'
      )

    setDocuments((oldDocuments) => [
      ...oldDocuments,
      { ...currentDocument, date: new Date() },
    ])
    Notify(NotifyTypes.SUCCESS, 'Documento adicionado com sucesso!')
    setCurrentDocument(initialDocumentValues)
    handleToggleModal({ isModalEdit: false })
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
