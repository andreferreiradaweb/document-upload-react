import { DatatableDocument } from '../../components/DatatableDocument'
import { Layout } from '../../components/Layout'
import { ModalForm } from '../../components/ModalForm'
import { Wrapper } from './styleds'
import { Button } from '../../components/Button'
import { useFormDocumentContext } from '../../contexts/formDocumentContext'

export const DocsPage = () => {
  const {
    onChange,
    onSubmit,
    values,
    handleToggleModal,
    isModalOpen,
    documents,
    handleInputChange,
  } = useFormDocumentContext()

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
