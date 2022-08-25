import { useEffect, useState } from 'react'
import { UserServices } from './services/user'
import { IUser } from './interfaces/user'

function App() {
  const [users, setUsers] = useState<Array<IUser>>([])

  const getUsers = async () => {
    const response = await UserServices.getUsers()
    setUsers(response)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <ul>
        {users.map((user: IUser) => {
          return <li key={user.email}>{user.email}</li>
        })}
      </ul>
    </>
  )
}

export default App
