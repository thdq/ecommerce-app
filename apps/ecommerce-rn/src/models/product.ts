export type ProductType = {
  id: string
  title: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

class Product implements ProductType {
  id: string
  title: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
  constructor(params: ProductType) {
    Object.assign(this, params)
  }
}

export { Product }
