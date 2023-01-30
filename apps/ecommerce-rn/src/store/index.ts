import { atom } from 'jotai'

import { CartSummaryModel, ProductList } from '@app/models'

const initialValues = {
  cartSummaryAtom: new CartSummaryModel([]),
}

const productListModelAtom = atom<ProductList>(null)
const cartSummaryAtom = atom<CartSummaryModel>(initialValues.cartSummaryAtom)

export { cartSummaryAtom, productListModelAtom }
