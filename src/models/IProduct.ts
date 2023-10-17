import ICategory from "./ICategory"
import IUser from "./IUser"

export default interface IProduct {
    id: number,
    name: string,
    type: string,
    manufacturer: string,
    value: number,
    category: ICategory | null
    user: IUser | null
}