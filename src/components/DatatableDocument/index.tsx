import DataTable from 'react-data-table-component'
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi'
import { datatableStyles } from './customStyles'
import { DatatableButton, WrapperDataTable } from './styleds'
import { DatatableDocumentProps } from './types'
import { format } from 'date-fns'
import { DocumentType } from '../../contexts/formDocumentContext/types'
import { useFormDocumentContext } from '../../contexts/formDocumentContext'

export const DatatableDocument = ({
  documents = [],
}: DatatableDocumentProps) => {
  const { handleDeleteDocument, handleEditDocument } = useFormDocumentContext()
  const headers = [
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
      selector: (row: DocumentType) => row.file.name,
      sortable: true,
      reorder: true,
    },
    {
      id: 4,
      name: 'Data e Hora de Criação',
      selector: (row: DocumentType) => format(row.date, 'dd/mm/yyyy HH:mm'),
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
            onClick={() => handleDeleteDocument(row.id)}
          >
            <HiOutlineTrash />
          </DatatableButton>
          <DatatableButton onClick={() => handleEditDocument(row.id)}>
            <HiOutlinePencil />
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
