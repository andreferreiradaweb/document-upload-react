import { IUser } from '../interfaces/user'
import { Api } from '.'
export class UserServices {
  static async getUsers() {
    const { data } = await Api.get(`/users`)
    return data
  }

  static async addUser(formData: IUser) {
    const { data } = await Api.post(`/users`, formData)
    return data
  }

  static async updateUser(userId: number, formData: IUser) {
    const { data } = await Api.put(`/users/${userId}`, formData)
    return data
  }

  static async deleteUser(userId: number) {
    const { data } = await Api.delete(`/users/${userId}`)
    return data
  }
}
