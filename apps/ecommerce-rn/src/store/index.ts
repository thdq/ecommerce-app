import { atom } from 'jotai'

import { CartSummaryModel, ProductList, ProductModel } from '@app/models'

const productListAtom = atom<ProductList>(null)
const cartSummaryAtom = atom<ProductModel[]>([])

const cartSummaryModelAtom = atom(
  (get) => {
    const products = get(cartSummaryAtom)
    return new CartSummaryModel(products)
  },
  (_get, set, products: ProductModel[]) => {
    set(cartSummaryAtom, products)
  },
)

const productListModelAtom = atom(
  (get) => {
    const productList = get(productListAtom)
    const productModel = productList?.products?.map((product) => new ProductModel(product))

    return {
      ...productList,
      products: productModel,
    }
  },
  (_get, set, newProductList: ProductList) => {
    set(productListAtom, newProductList)
  },
)

export { cartSummaryModelAtom, productListModelAtom }
