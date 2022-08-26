import { FormEvent, useEffect, useState } from 'react'
import { UserServices } from '../../services/'
import { IUser } from '../../interfaces/user'

import DataTable from 'react-data-table-component'

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    number: 3,
    street: '7835 new road',
    zipcode: '12926-3874',
  },
  name: {
    firstname: 'John',
    lastname: 'Doe',
  },
  email: 'andre@gmail.com',
  username: 'andre',
  password: '12345',
  phone: '1-570-236-7033',
}

const headers = [
  {
    id: 1,
    name: 'E-MAIL',
    selector: (row: IUser) => row.email,
    sortable: true,
    reorder: true,
  },
  {
    id: 2,
    name: 'NOME',
    selector: (row: IUser) => row.name.firstname,
    sortable: true,
    reorder: true,
  },
]

export function HomePage() {
  const [users, setUsers] = useState<Array<IUser>>([])

  const getUsers = async () => {
    try {
      const response = await UserServices.getUsers()
      setUsers(response)
    } catch (error) {
      console.error({ error })
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleAddUser = async (event: FormEvent) => {
    event.preventDefault()
    try {
      setUsers((oldUsers) => [...oldUsers, user])
      await UserServices.addUser(user)
    } catch (error) {
      console.error({ error })
    }
  }

  return (
    <>
      <DataTable
        columns={headers}
        data={users}
        // conditionalRowStyles={conditionalRowStyles}
        defaultSortFieldId={1}
        expandableRows
        // customStyles={styles}
        // expandableRowsComponent={({ data }) => (
        //   <EmployersCompany userRow={data} />
        // )}
        // progressPending={pending}
        // expandableIcon={{
        //   collapsed: (
        //     <TiArrowSortedDown fill={colors.primary.darker} size="20" />
        //   ),
        //   expanded: <TiArrowSortedUp fill={colors.primary.darker} size="20" />,
        // }}
      />
      <form method="post" onSubmit={handleAddUser}>
        <button type="submit">Adicionar Usuário</button>
      </form>
    </>
  )
}
