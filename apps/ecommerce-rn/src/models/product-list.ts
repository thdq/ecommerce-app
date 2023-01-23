import { ProductType } from './product'

export type ProductList = {
  products: ProductType[]
  total: number
  skip: number
  limit: number
} | null
