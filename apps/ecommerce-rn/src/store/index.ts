import { atom } from 'jotai'

import { ProductType, ProductList } from '@app/models'

const productListAtom = atom<ProductList>(null)
const cartSummaryAtom = atom<ProductType[]>([])

export { productListAtom, cartSummaryAtom }
