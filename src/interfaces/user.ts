export interface IUser {
  address: {
    city: string
    geolocation: {
      lat: string
      long: string
    }
    number: 7682
    street: string
    zipcode: string
  }
  email: string
  id: number
  name: {
    firstname: string
    lastname: string
  }
  password: string
  phone: string
  username: string
}
