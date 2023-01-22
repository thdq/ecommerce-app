import { atom } from 'jotai'
import { ProductsPayload } from '../api/get-products'
import { CartSummaryType } from '../models/cart-summary'

const initialValues = {
  cartSummaryAtom: {
    totalItens: 0,
    totalPrice: 0,
    list: [],
  },
}

const productsAtom = atom<ProductsPayload>(null)
const cartSummaryAtom = atom<CartSummaryType>(initialValues.cartSummaryAtom)

export { productsAtom, cartSummaryAtom }
