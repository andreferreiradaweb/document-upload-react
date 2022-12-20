import DataTable from 'react-data-table-component'
import { DocumentsType } from '../ModalForm/types'
import { datatableStyles } from './customStyles'
import { WrapperDataTable } from './styleds'
import { DatatableDocumentProps } from './types'
import { format } from 'date-fns'

export const DatatableDocument = ({
  documents = [],
}: DatatableDocumentProps) => {
  const headers = [
    {
      id: 1,
      name: 'Título',
      selector: (row: DocumentsType) => row.title,
      sortable: true,
      reorder: true,
    },
    {
      id: 2,
      name: 'Descrição',
      selector: (row: DocumentsType) => row.description,
      sortable: true,
      reorder: true,
    },
    {
      id: 3,
      name: 'Nome do Arquivo',
      selector: (row: DocumentsType) => row.file.name,
      sortable: true,
      reorder: true,
    },
    {
      id: 4,
      name: 'Data e Hora de Criação',
      selector: (row: DocumentsType) => format(row.date, 'dd/mm/yyyy HH:mm'),
      sortable: true,
      reorder: true,
    },
    // {
    //   id: 5,
    //   name: '',
    //   selector: (row: DocumentsType) => (
    //     <>
    //       <DatatableButton
    //         style={{ marginRight: '10px' }}
    //         onClick={() => handleDeleteItem(Number(row.id))}
    //       >
    //         <HiOutlineTrash />
    //       </DatatableButton>
    //       <DatatableButton onClick={() => handlePressEdit(row.id)}>
    //         <HiOutlinePencil />
    //       </DatatableButton>
    //     </>
    //   ),
    // },
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
