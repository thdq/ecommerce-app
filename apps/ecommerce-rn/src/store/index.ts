import { atom } from 'jotai'

import { CartSummary, ProductList } from '@app/models'

const productListModelAtom = atom<ProductList>(null)
const cartSummaryAtom = atom<CartSummary>(null)

export { cartSummaryAtom, productListModelAtom }
