import { ProductModel, Product } from '@app/models'

export const useProductModel = () => {
  return {
    createProductModel: (product: Product) => new ProductModel(product),
  }
}
