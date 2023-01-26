import { ProductModel, Product } from '@app/models'

export const useProductModel = () => {
  return {
    createModel: (product: Product) => new ProductModel(product),
  }
}
