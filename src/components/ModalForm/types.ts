import { ChangeEvent, FormEvent } from 'react'
import { DocumentType } from '../../contexts/formDocumentContext/types'

export type ModalFormProps = {
  isOpen?: boolean
  onRequestClose?(): void
  onSubmit?(e: FormEvent<HTMLFormElement>): void
  onChange(e: ChangeEvent<HTMLElement>): void
  onChangeInputFile(e: ChangeEvent<HTMLInputElement>): void
  inputValues: DocumentType
}
