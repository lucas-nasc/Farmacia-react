import IProduct from "./IProduct";

export default interface ICategory {
    id: number,
    name: string,
    description: string,
    product?: IProduct | null
}