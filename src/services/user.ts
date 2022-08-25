import { Api } from './api'
export class UserServices {
  static async getUsers() {
    const { data } = await Api.get(`/users`)
    return data
  }
}
