import { useEffect, useState } from 'react'
import { UserServices } from '../../services/'
import { IUser } from '../../interfaces/user'
import Modal from 'react-modal'
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

import DataTable from 'react-data-table-component'
import {
  Wrapper,
  Container,
  Title,
  WrapperDataTable,
  MyButton,
  ModalContent,
  styles,
  customStyleModal,
  WrapperInputs,
} from './styles'
import { AddButton } from '../../components/AddButton'
import { InputSelected } from '../../components/InputSelected'
import { Notify, NotifyTypes } from '../../components/Notify'
import { Button } from '../../components/Button'

const initializeUser = {
  address: {
    geolocation: {
      lat: '',
      long: '',
    },
    city: '',
    number: 0,
    street: '',
    zipcode: '',
  },
  name: {
    firstname: '',
    lastname: '',
  },
  email: '',
  username: '',
  password: '',
  phone: '',
}

const initializeSelectedUser = {
  firstname: '',
  email: '',
  phone: '',
  city: '',
  street: '',
  number: '',
  id: 0,
}

interface IUserState {
  firstname: string
  email: string
  phone: string
  city: string
  street: string
  number: string
  id: number
}

export function HomePage() {
  const [users, setUsers] = useState<Array<IUser>>([initializeUser])
  const [isModalAdd, setIsModalAdd] = useState<boolean>(false)
  const [selectedUser, setSelectedUser] = useState<IUserState>(
    initializeSelectedUser
  )
  const [isModalOpen, setIsModalOpen] = useState(false)

  const headers = [
    {
      id: 1,
      name: 'NOME',
      selector: (row: IUser) => row.name.firstname,
      sortable: true,
      reorder: true,
    },
    {
      id: 2,
      name: 'E-MAIL',
      selector: (row: IUser) => row.email,
      sortable: true,
      reorder: true,
    },
    {
      id: 3,
      name: 'TELEFONE',
      selector: (row: IUser) => row.phone,
      sortable: true,
      reorder: true,
    },
    {
      id: 4,
      name: 'CIDADE',
      selector: (row: IUser) => row.address.city,
      sortable: true,
      reorder: true,
    },
    {
      id: 5,
      name: 'AÇÕES',
      selector: (row: IUser) => (
        <>
          <MyButton
            style={{ marginRight: '10px' }}
            onClick={() => handleDeleteItem(Number(row.id))}
          >
            <HiOutlineTrash />
          </MyButton>
          <MyButton
            onClick={() => {
              handleOpenModal()
              setSelectedUser({
                ...selectedUser,
                firstname: row.name.firstname,
                email: row.email,
                phone: row.phone,
                city: row.address.city,
                street: row.address.street,
                number: String(row.address.number),
              })
            }}
          >
            <HiOutlinePencil />
          </MyButton>
        </>
      ),
    },
  ]

  async function handleOpenModal() {
    setIsModalOpen((value) => !value)
  }

  async function handleDeleteItem(userId: number) {
    try {
      await UserServices.deleteUser(userId)
      const newUsers = users.filter((user: IUser) => user.id !== userId)
      setUsers(newUsers)
      Notify(NotifyTypes.SUCCESS, 'Usuário deletado com sucesso')
    } catch (error) {
      console.error({ error })
      Notify(
        NotifyTypes.ERROR,
        'Erro ao deletar usuário, por favor tente novamente'
      )
    }
  }

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

  const handleAddUser = async () => {
    const newUser = {
      name: {
        firstname: selectedUser.firstname,
      },
      email: selectedUser.email,
      phone: selectedUser.phone,
      address: {
        city: selectedUser.city,
        number: Number(selectedUser.number),
        street: selectedUser.street,
      },
    }
    try {
      if (isModalAdd) {
        await UserServices.addUser(newUser)
      } else {
        await UserServices.updateUser(newUser, selectedUser.id)
      }
      setUsers((oldUsers) => [...oldUsers, newUser])
    } catch (error) {
      console.error({ error })
    }
  }

  function handleChange(event: any) {
    event.preventDefault()
    setSelectedUser({
      ...selectedUser,
      [event.target.name]: String(event.target.value),
    })
  }

  return (
    <Container>
      <Modal style={customStyleModal} isOpen={isModalOpen} ariaHideApp={false}>
        <ModalContent>
          <h2>{isModalAdd ? 'Adicionar' : 'Editar'} usuário</h2>
          <button
            className="closeButton"
            onClick={() => {
              setIsModalOpen((value) => !value)
              setIsModalAdd(false)
            }}
          >
            <MdClose size="18" />
          </button>
          <div className="hr"></div>
          <form>
            <InputSelected
              disabled={false}
              style={{ marginTop: '10px' }}
              label="Nome"
              name="firstname"
              onChange={(event: any) => handleChange(event)}
              value={selectedUser.firstname ?? ''}
            />
            <InputSelected
              disabled={false}
              style={{ marginTop: '10px' }}
              label="E-mail"
              name="email"
              onChange={(event: any) => handleChange(event)}
              value={selectedUser.email ?? ''}
            />
            <InputSelected
              disabled={false}
              style={{ marginTop: '10px' }}
              label="Telefone"
              name="phone"
              onChange={(event: any) => handleChange(event)}
              value={selectedUser.phone ?? ''}
            />
            <InputSelected
              disabled={false}
              style={{ marginTop: '10px' }}
              label="Cidade"
              name="city"
              onChange={(event: any) => handleChange(event)}
              value={selectedUser.city ?? ''}
            />
            <InputSelected
              disabled={false}
              style={{ marginTop: '10px' }}
              label="Rua"
              name="street"
              onChange={(event: any) => handleChange(event)}
              value={selectedUser.street ?? ''}
            />
            <InputSelected
              disabled={false}
              style={{ marginTop: '10px' }}
              label="Número"
              name="number"
              onChange={(event: any) => handleChange(event)}
              value={selectedUser.number ?? ''}
            />
            <Button
              small
              type="button"
              customSize="40%"
              onClick={() => {
                handleAddUser()
              }}
              title={isModalAdd ? 'Cadastrar' : 'Atualizar'}
            />
          </form>
        </ModalContent>
      </Modal>
      <Wrapper>
        <Title>Usuários</Title>
        <WrapperDataTable>
          <DataTable
            columns={headers}
            data={users}
            defaultSortFieldId={1}
            customStyles={styles}
            // conditionalRowStyles={conditionalRowStyles}
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
        </WrapperDataTable>
        <AddButton
          onClick={() => {
            setSelectedUser(initializeSelectedUser)
            setIsModalAdd((oldValue: boolean) => !oldValue)
            handleOpenModal()
          }}
        />
      </Wrapper>
    </Container>
  )
}
