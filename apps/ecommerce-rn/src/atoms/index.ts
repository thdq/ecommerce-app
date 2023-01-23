import { atom } from 'jotai'

import { CartSummary } from '../models/cart-summary'
import { ProductList } from '../models/product-list'

const initialValues = {
  cartSummaryAtom: {
    totalItens: 0,
    totalPrice: 0,
    list: [],
  },
}

const productListAtom = atom<ProductList>(null)
const cartSummaryAtom = atom<CartSummary>(initialValues.cartSummaryAtom)

export { productListAtom, cartSummaryAtom }
