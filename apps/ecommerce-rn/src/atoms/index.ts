import { atom } from 'jotai'
import { CartType } from '../models/cart'
import { ProductType } from '../models/product'

export type ProductsAtom = {
  products: ProductType[]
  total: number
  skip: number
  limit: number
} | null

const productsAtom = atom<ProductsAtom>(null)
const cartAtom = atom<CartType[]>([])

export { productsAtom, cartAtom }
