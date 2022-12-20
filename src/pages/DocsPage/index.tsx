import { ChangeEvent, useState } from 'react'
import { DatatableDocument } from '../../components/DatatableDocument'
import { Layout } from '../../components/Layout'
import { ModalForm } from '../../components/ModalForm'
import { DocumentsType } from '../../components/ModalForm/types'
import { Wrapper } from './styleds'
import { useForm } from '../../hooks/useForm'
import { Button } from '../../components/Button'
import { Notify, NotifyTypes } from '../../components/Notify'

const initialState = {
  title: '',
  description: '',
  fileName: '',
}

export const DocsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [documents, setDocuments] = useState<DocumentsType[]>([])
  const [file, setFile] = useState<File | null>(null)

  const { onChange, onSubmit, values, onSetValues } = useForm(
    handleSubmit,
    initialState
  )

  const handleInputChange = ({
    currentTarget: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    if (files && files.length) {
      setFile(files[0])
      onSetValues({ ...values, fileName: files[0].name })
    }
  }

  const handleToggleModal = () => {
    onSetValues(initialState)
    setIsModalOpen((oldValue) => !oldValue)
  }

  async function handleSubmit() {
    if (!file) {
      return Notify(NotifyTypes.ERROR, 'Você esqueceu de inserir um documento!')
    }
    const { title, description } = values
    const newDocumentData = {
      id: '1212312312-234325-534645-654-yghfh-45-ty4ert-gd',
      title,
      description,
      fileName: String(file.name),
      date: new Date(),
      file,
    }
    await setDocuments((oldDocuments) => [...oldDocuments, newDocumentData])
    console.log(documents)
    handleToggleModal()
    onSetValues(initialState)
  }

  return (
    <Layout>
      <Wrapper>
        <ModalForm
          onRequestClose={handleToggleModal}
          isOpen={isModalOpen}
          onChange={onChange}
          onChangeInputFile={handleInputChange}
          onSubmit={onSubmit}
          inputValues={values}
        />
        <DatatableDocument documents={documents} />
        <Button type="button" onClickButton={handleToggleModal}>
          Adicionar novo arquivo
        </Button>
      </Wrapper>
    </Layout>
  )
}
