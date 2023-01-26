import { ProductModel, ProductType } from '../models/product'

export const useProductModel = () => {
  return {
    createModel: (product: ProductType) => new ProductModel(product),
  }
}
