import { ChangeEvent, FormEvent, ReactNode } from 'react'

export type InputValuesType = {
  title: string
  description: string
  fileName: string
}

export type FormDocumentProviderProps = {
  children: ReactNode
}

export type DocumentsType = {
  id: string | null
  title: string
  description: string
  fileName: string
  file: File
  date: Date
}

export type FormDocumentContextTypes = {
  onChange(e: ChangeEvent<HTMLInputElement>): void
  onSubmit(e: FormEvent<HTMLFormElement>): void
  values: InputValuesType
  onSetValues(initialValues: InputValuesType): void
  file: File | null
  documents: DocumentsType[]
  handleInputChange(e: ChangeEvent<HTMLInputElement>): void
  initialState: InputValuesType
  handleToggleModal(): void
  isModalOpen: boolean
}
