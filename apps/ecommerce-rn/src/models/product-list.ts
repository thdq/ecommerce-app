import { ProductModel } from './product'

export type ProductList = {
  products: ProductModel[]
  total: number
  skip: number
  limit: number
} | null
