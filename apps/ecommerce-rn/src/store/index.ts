import { atom } from 'jotai'

import { ProductType } from '../models/product'
import { ProductList } from '../models/product-list'

const productListAtom = atom<ProductList>(null)
const cartSummaryAtom = atom<ProductType[]>([])

export { productListAtom, cartSummaryAtom }
