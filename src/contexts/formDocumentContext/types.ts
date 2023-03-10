import { ChangeEvent, FormEvent, ReactNode } from 'react'

export type FormDocumentProviderProps = {
  children: ReactNode
}

export type DocumentType = {
  id: string | null
  title: string
  description: string
  fileName: string
  file: File | null
  date: Date | null
}

export type HandleOpenReaderTypes = {
  documentId: string
  file: File
}

export type FormDocumentContextTypes = {
  handleChange(e: ChangeEvent<HTMLInputElement>): void
  handleSubmit(e: FormEvent<HTMLFormElement>): void
  currentDocument: DocumentType
  documents: DocumentType[]
  handleInputDocumentChange(e: ChangeEvent<HTMLInputElement>): void
  handleToggleModal(): void
  isModalOpen: boolean
  handleDeleteDocument(id: string): void
  handleEditDocument(id: string): void
  base64PdfFile: string | null
  handleToggleModalReader(): void
  isModalReaderOpen: boolean
  handleOpenReader({ file, documentId }: HandleOpenReaderTypes): void
}
