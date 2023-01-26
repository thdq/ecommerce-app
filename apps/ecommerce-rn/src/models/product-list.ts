import { Product } from './product'

export type ProductList = {
  products: Product[]
  total: number
  skip: number
  limit: number
} | null
