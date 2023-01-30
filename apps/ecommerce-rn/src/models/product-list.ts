import { ProductModel } from './product'

export type ProductList = {
  products: ProductModel[]
  total: number
  skip: number
  limit: number
} | null

export const mapProductList = (productList: ProductList): ProductList => {
  if (!productList) return null

  const productModel = productList?.products?.map((product) => new ProductModel(product))
  return {
    ...productList,
    products: productModel,
  }
}
