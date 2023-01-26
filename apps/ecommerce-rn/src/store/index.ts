import { atom } from 'jotai'

import { Product, ProductList } from '@app/models'

const productListAtom = atom<ProductList>(null)
const cartSummaryAtom = atom<Product[]>([])

export { productListAtom, cartSummaryAtom }
