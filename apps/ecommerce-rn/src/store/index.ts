import { atom } from 'jotai'

import { Product, ProductList, ProductModel } from '@app/models'

const productListAtom = atom<ProductList>(null)
const cartSummaryAtom = atom<Product[]>([])

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

export { productListAtom, cartSummaryAtom, productListModelAtom }
