export type Product = {
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

const FREE_SHIPPING_IF_MORE_THAN_IT = 300
const TAX_SHIP_PERCENTAGE = 0.07

export class ProductModel implements Product {
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
  private quantity: number
  constructor(params: Product) {
    Object.assign(this, params)
  }

  getAddedQuantity(): number {
    return this.quantity
  }

  setQuantity(quantity: number): void {
    this.quantity = quantity
  }

  getFormattedPrice(): string {
    return this.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  isFreeShipping(): boolean {
    return this.getShippingTax() === 0
  }

  getShippingTax(): number {
    if (this.price > FREE_SHIPPING_IF_MORE_THAN_IT) return 0
    return this.price * TAX_SHIP_PERCENTAGE
  }

  getFormattedShippingTax(): string {
    const priceWithTax = this.getShippingTax()
    return priceWithTax.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  getPriceWithShipping(): number {
    if (this.price > FREE_SHIPPING_IF_MORE_THAN_IT) return this.price

    return this.price + this.getShippingTax()
  }
}
