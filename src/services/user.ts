import { IUser } from '../interfaces/user'
import { Api } from '.'
export class UserServices {
  static async getUsers() {
    const { data } = await Api.get(`/users`)
    return data
  }

  static async addUser(user: Omit<IUser, 'id'>) {
    const { data } = await Api.post<IUser>(`/users`, user)
    return data
  }

  static async updateUser(user: IUser) {
    const { data } = await Api.put(`/users/${user.id}`, user)
    return data
  }

  static async deleteUser(userId: number) {
    const { data } = await Api.delete(`/users/${userId}`)
    return data
  }
}
