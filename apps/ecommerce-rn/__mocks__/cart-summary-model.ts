import { CartSummaryModel, ProductModel } from '@app/models'
import { productListMock } from './product-list'

const productListModel =
  productListMock?.products?.map((product) => new ProductModel(product)) ?? []

export const cartSummaryMock: CartSummaryModel = new CartSummaryModel(productListModel)
