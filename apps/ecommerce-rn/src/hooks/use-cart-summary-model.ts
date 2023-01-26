import { CartSummaryModel, ProductModel } from '@app/models'

export const useCartSummaryModel = () => {
  return {
    createCartSummaryModel: (products: ProductModel[]) => new CartSummaryModel(products),
  }
}
