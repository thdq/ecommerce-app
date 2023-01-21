import { atom } from 'jotai'
import { Product } from '../models/product'

const productAtom = atom(null)
const cartAtom = atom<Product[]>([])
const categoriesAtom = atom<string[]>([])

export { productAtom, cartAtom, categoriesAtom }
