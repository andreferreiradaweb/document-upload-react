import { FormEvent, useEffect, useState } from 'react'
import { UserServices } from '../../services/'
import { IUser } from '../../interfaces/user'

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
    e.preventDefault()
    try {
      setUsers((oldUsers) => [...oldUsers, user])
      await UserServices.addUser(user)
    } catch (error) {
      console.error({ error })
    }
  }

  return (
    <>
      <ul>
        {users.map((user: IUser) => {
          return <li key={user.email}>{user.email}</li>
        })}
      </ul>
      <form method="post" onSubmit={handleAddUser}>
        <button type="submit">Adicionar Usuário</button>
      </form>
    </>
  )
}
