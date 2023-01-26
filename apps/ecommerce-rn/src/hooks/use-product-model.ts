import { ProductModel, ProductType } from '@app/models'

export const useProductModel = () => {
  return {
    createModel: (product: ProductType) => new ProductModel(product),
  }
}
