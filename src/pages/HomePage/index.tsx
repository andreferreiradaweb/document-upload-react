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
} from './styles'
import { AddButton } from '../../components/AddButton'
import { InputSelected } from '../../components/InputSelected'
import { Notify, NotifyTypes } from '../../components/Notify'
import { Button } from '../../components/Button'
import { useFormik } from 'formik'

const initialValues = {
  firstname: '',
  email: '',
  phone: '',
  city: '',
  street: '',
  number: '',
}

export function HomePage() {
  const [users, setUsers] = useState<Array<IUser> | null>(null)
  const [isModalAdd, setIsModalAdd] = useState<boolean>(false)
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { values, handleChange, handleSubmit, setValues } = useFormik({
    initialValues,
    onSubmit: handlePressSubmit,
  })

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
          <MyButton onClick={() => handlePressEdit(row.id)}>
            <HiOutlinePencil />
          </MyButton>
        </>
      ),
    },
  ]

  async function toggleModal() {
    setIsModalOpen((value) => !value)
  }

  function handlePressEdit(userId: number) {
    const user = users?.find((user) => user.id === userId)
    if (!user) return
    setValues({
      firstname: user.name.firstname,
      city: user.address.city,
      email: user.email,
      phone: user.phone,
      number: user.address.number.toString(),
      street: user.address.street,
    })
    toggleModal()
    setSelectedUserId(userId)
    setIsModalAdd(false)
  }

  async function handleDeleteItem(userId: number) {
    try {
      if (!users) return
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

  const addUser = async (user: Omit<IUser, 'id'>) => {
    try {
      const newUser = await UserServices.addUser(user)
      Notify(NotifyTypes.SUCCESS, 'Usuário adicionado com sucesso')

      setUsers((oldUsers) =>
        oldUsers
          ? [...oldUsers, { ...user, id: newUser.id }]
          : [{ ...user, id: newUser.id }]
      )
    } catch (error) {
      console.error({ error })

      Notify(
        NotifyTypes.ERROR,
        'Erro ao cadastrar usuário, por favor tente novamente'
      )
    } finally {
      toggleModal()
    }
  }

  const updateUser = async (newUser: IUser) => {
    try {
      if (!users) return
      await UserServices.updateUser(newUser)
      Notify(NotifyTypes.SUCCESS, 'Usuário atualizado com sucesso')

      const updatedUsers = users.map((user) =>
        user.id === newUser.id ? newUser : user
      )

      setUsers(updatedUsers)
    } catch (error) {
      console.error({ error })

      Notify(
        NotifyTypes.ERROR,
        'Erro ao atualizar usuário, por favor tente novamente'
      )
    } finally {
      toggleModal()
    }
  }

  async function handlePressSubmit() {
    const { city, email, firstname, number, phone, street } = values
    const newUser = {
      address: {
        geolocation: {
          lat: '-37.3159',
          long: '81.1496',
        },
        city,
        number: Number(number),
        street,
        zipcode: '12926-3874',
      },
      name: {
        firstname,
        lastname: 'doe',
      },
      email,
      phone,
    }
    if (isModalAdd) {
      await addUser(newUser)
    } else {
      if (selectedUserId) {
        await updateUser({ id: selectedUserId, ...newUser })
      }
    }
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
              setIsModalAdd(() => false)
            }}
          >
            <MdClose size="18" />
          </button>
          <div className="hr"></div>
          <form onSubmit={handleSubmit}>
            <InputSelected
              disabled={false}
              style={{ marginTop: '10px' }}
              label="Nome"
              name="firstname"
              onChange={handleChange}
              value={values.firstname}
            />
            <InputSelected
              disabled={false}
              style={{ marginTop: '10px' }}
              label="E-mail"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            <InputSelected
              disabled={false}
              style={{ marginTop: '10px' }}
              label="Telefone"
              name="phone"
              onChange={handleChange}
              value={values.phone}
            />
            <InputSelected
              disabled={false}
              style={{ marginTop: '10px' }}
              label="Cidade"
              name="city"
              onChange={handleChange}
              value={values.city}
            />
            <InputSelected
              disabled={false}
              style={{ marginTop: '10px' }}
              label="Rua"
              name="street"
              onChange={handleChange}
              value={values.street}
            />
            <InputSelected
              disabled={false}
              style={{ marginTop: '10px' }}
              label="Número"
              name="number"
              onChange={handleChange}
              value={values.number}
            />
            <Button
              small
              type="submit"
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
            data={users || []}
            defaultSortFieldId={1}
            customStyles={styles}
          />
        </WrapperDataTable>
        <AddButton
          onClick={() => {
            setValues(initialValues)
            setSelectedUserId(null)
            setIsModalAdd(true)
            toggleModal()
          }}
        />
      </Wrapper>
    </Container>
  )
}
