import IProduct from "./IProduct";

export default interface IUser {
    id: number,
    name: string,
    email: string,
    password: string,
    product: IProduct | null
}