import { ChangeEvent, FormEvent } from 'react'

export type DocumentsType = {
  id: string | null
  title: string
  description: string
  fileName: string
  file: File
  date: Date
}

export type InputValuesType = {
  title: string
  description: string
}

export type ModalFormProps = {
  isOpen?: boolean
  onRequestClose?(): void
  onSubmit?(e: FormEvent<HTMLFormElement>): void
  onChange(e: ChangeEvent<HTMLInputElement>): void
  onChangeInputFile(e: ChangeEvent<HTMLInputElement>): void
  inputValues: InputValuesType
}
