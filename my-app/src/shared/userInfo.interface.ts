export interface IUserPost {
    body: string,
    id: number,
    title: string,
    userId: number
}

type Geo = Record<"lat" | "lng" , string>
interface IUserAddress {
    city: string,
    geo: Geo,
    street: string,
    suite: string,
    zipcode: string
}
interface IUserCompany {
    name: string,
    catchPhrase: string,
    bs: string
}
export interface IUser {
    address: IUserAddress
    company: IUserCompany
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}