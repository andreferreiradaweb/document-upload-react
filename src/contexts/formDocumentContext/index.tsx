import { ChangeEvent, createContext, useContext, useState } from 'react'
import { Notify, NotifyTypes } from '../../components/Notify'
import { getFileRenamed } from '../../utils/getFileRenamed'
import { getRandomId } from '../../utils/getRandomId'
import {
  DocumentsType,
  FormDocumentContextTypes,
  FormDocumentProviderProps,
  InputValuesType,
} from './types'

const FormDocumentContext = createContext({} as FormDocumentContextTypes)

export const FormDocumentProvider = ({
  children,
}: FormDocumentProviderProps) => {
  const initialState = {
    title: '',
    description: '',
    fileName: '',
  }
  const [values, setValues] = useState(initialState)
  const [documents, setDocuments] = useState<DocumentsType[]>([])
  const [file, setFile] = useState<File | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleToggleModal = () => {
    onSetValues(initialState)
    setIsModalOpen((oldValue) => !oldValue)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const onSetValues = (initialValues: InputValuesType) => {
    setValues(initialValues)
  }

  const handleInputChange = ({
    currentTarget: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    if (files && files.length) {
      if (!values.fileName) return setFile(files[0])
      const newFile = getFileRenamed({
        originalFile: files[0],
        newName: values.fileName,
      })
      setFile(newFile)
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { title, description, fileName } = values
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

    const newDocumentData = {
      id: getRandomId(),
      title,
      description,
      fileName: fileName ?? String(file.name),
      date: new Date(),
      file,
    }
    await setDocuments((oldDocuments) => [...oldDocuments, newDocumentData])
    Notify(NotifyTypes.SUCCESS, 'Documento adicionado com sucesso!')
    onSetValues(initialState)
    handleToggleModal()
  }

  const contextValues = {
    onChange,
    onSubmit,
    values,
    onSetValues,
    file,
    documents,
    handleInputChange,
    initialState,
    handleToggleModal,
    isModalOpen,
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
