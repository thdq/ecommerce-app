export type ProductType = {
  id: number
  description: string
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

type CartStatus = {
  inCart: boolean
  quantity: number
}

class Product implements ProductType {
  id: number
  description: string
  title: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
  private cartStatus: CartStatus
  constructor(params: ProductType) {
    Object.assign(this, params)
    this.cartStatus = {
      inCart: false,
      quantity: 0,
    }
  }

  getFormattedPrice(): string {
    return this.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  isInCart(): boolean {
    const { inCart, quantity } = this.cartStatus
    return inCart && quantity >= 1
  }

  addToCart(quantity?: number): void {
    this.cartStatus = {
      inCart: true,
      quantity: quantity || 1,
    }
  }

  removeFromCart(): void {
    this.cartStatus = {
      inCart: false,
      quantity: 0,
    }
  }
}

export { Product }
