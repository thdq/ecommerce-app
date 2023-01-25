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

const FREE_SHIPPING_IF_MORE_THAN_IT = 300
const TAX_SHIP_PERCENTAGE = 0.07

export class ProductModel implements ProductType {
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

  getAddedQuantity() {
    if (!this.cartStatus.inCart)
      throw new Error('ProductModel not in cart, you must add to cart to get quantity')

    return this.cartStatus.quantity
  }

  getFormattedPrice(): string {
    return this.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  getShippingTax(): number {
    if (this.price > FREE_SHIPPING_IF_MORE_THAN_IT) return 0
    return this.price * TAX_SHIP_PERCENTAGE
  }

  getPriceWithShipping(): number {
    if (this.price > FREE_SHIPPING_IF_MORE_THAN_IT) return this.price

    return this.price + this.getShippingTax()
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
