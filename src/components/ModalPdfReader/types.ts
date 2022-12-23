import { DocumentType } from '../../contexts/formDocumentContext/types'

export type ModalFormProps = {
  isOpen?: boolean
  onRequestClose?(): void
  values: {
    currentDocument: DocumentType
    base64FileUrl: string
  }
}
