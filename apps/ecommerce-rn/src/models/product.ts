type ProductType = {
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
  inCart: boolean
  constructor(params: ProductType) {
    Object.assign(this, params)
  }

  getFormattedPrice(): string {
    return this.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  markAsInCart(): void {
    this.inCart = true
  }

  unMarkFromCart(): void {
    this.inCart = false
  }
}

export { Product }
