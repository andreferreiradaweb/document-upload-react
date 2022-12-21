import { DatatableDocument } from '../../components/DatatableDocument'
import { Layout } from '../../components/Layout'
import { ModalForm } from '../../components/ModalForm'
import { Wrapper } from './styleds'
import { Button } from '../../components/Button'
import { useFormDocumentContext } from '../../contexts/formDocumentContext'

export const DocsPage = () => {
  const {
    handleChange,
    handleSubmit,
    handleToggleModal,
    isModalOpen,
    documents,
    currentDocument,
    handleInputDocumentChange,
  } = useFormDocumentContext()

  return (
    <Layout>
      <Wrapper>
        <ModalForm
          onRequestClose={handleToggleModal}
          isOpen={isModalOpen}
          onChange={handleChange}
          onChangeInputFile={handleInputDocumentChange}
          onSubmit={handleSubmit}
          inputValues={currentDocument}
        />
        <DatatableDocument documents={documents} />
        <Button type="button" onClickButton={handleToggleModal}>
          Adicionar novo arquivo
        </Button>
      </Wrapper>
    </Layout>
  )
}
