import DataTable from 'react-data-table-component'
import { HiOutlineTrash, HiOutlineEye, HiOutlinePencil } from 'react-icons/hi'
import { MdDownloading } from 'react-icons/md'
import { datatableStyles } from './customStyles'
import { DatatableButton, WrapperDataTable } from './styleds'
import { DatatableDocumentProps } from './types'
import { format } from 'date-fns'
import {
  DocumentType,
  HandleOpenReaderTypes,
} from '../../contexts/formDocumentContext/types'
import { useFormDocumentContext } from '../../contexts/formDocumentContext'
import { downloadFromFile } from '../../utils/downloadFileButton'

export const DatatableDocument = ({
  documents = [],
}: DatatableDocumentProps) => {
  const { handleDeleteDocument, handleEditDocument, handleOpenReader } =
    useFormDocumentContext()
  const headers: any = [
    {
      id: 1,
      name: 'Título',
      selector: (row: DocumentType) => row.title,
      sortable: true,
      reorder: true,
    },
    {
      id: 2,
      name: 'Descrição',
      selector: (row: DocumentType) => row.description,
      sortable: true,
      reorder: true,
    },
    {
      id: 3,
      name: 'Nome do Arquivo',
      selector: (row: DocumentType) => row.file?.name,
      sortable: true,
      reorder: true,
    },
    {
      id: 4,
      name: 'Data e Hora de Criação',
      selector: (row: DocumentType) =>
        format(row.date ?? new Date(), 'dd/mm/yyyy HH:mm'),
      sortable: true,
      reorder: true,
    },
    {
      id: 5,
      name: '',
      selector: (row: DocumentType) => (
        <>
          <DatatableButton
            style={{ marginRight: '10px' }}
            onClick={() => handleDeleteDocument(String(row.id))}
          >
            <HiOutlineTrash />
          </DatatableButton>
          <DatatableButton
            style={{ marginRight: '10px' }}
            onClick={() => handleEditDocument(String(row.id))}
          >
            <HiOutlinePencil />
          </DatatableButton>
          <DatatableButton
            style={{ marginRight: '10px' }}
            onClick={() => downloadFromFile(row.file as File)}
          >
            <MdDownloading />
          </DatatableButton>
          <DatatableButton
            onClick={() =>
              handleOpenReader({
                file: row.file as File,
                documentId: String(row.id),
              })
            }
          >
            <HiOutlineEye />
          </DatatableButton>
        </>
      ),
    },
  ]

  return (
    <WrapperDataTable>
      {documents.length && (
        <DataTable
          columns={headers}
          data={documents}
          defaultSortFieldId={1}
          customStyles={datatableStyles}
        />
      )}
    </WrapperDataTable>
  )
}
