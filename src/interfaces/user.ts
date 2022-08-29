export interface IUser {
  address: {
    geolocation?: {
      lat?: string
      long?: string
    }
    city: string
    number: number
    street: string
    zipcode?: string
  }
  name: {
    firstname: string
    lastname?: string
  }
  email: string
  username?: string
  password?: string
  phone: string
  id?: number
}
