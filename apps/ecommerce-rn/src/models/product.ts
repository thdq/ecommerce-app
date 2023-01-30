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
    return this.quantity ?? 1
  }

  setQuantity(quantity: number): void {
    this.quantity = quantity
  }

  getFormattedPrice(): string {
    return Number(this.price.toFixed(2)).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  isFreeShipping(): boolean {
    return this.getShippingTax() === 0
  }

  getShippingTax(): number {
    if (Number(this.price.toFixed(2)) > FREE_SHIPPING_IF_MORE_THAN_IT) return 0
    return Number(this.price.toFixed(2)) * TAX_SHIP_PERCENTAGE
  }

  getFormattedShippingTax(): string {
    const priceWithTax = this.getShippingTax()
    return priceWithTax.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  getPriceWithShipping(): number {
    if (Number(this.price.toFixed(2)) > FREE_SHIPPING_IF_MORE_THAN_IT)
      return Number(this.price.toFixed(2))

    return Number(this.price.toFixed(2)) + this.getShippingTax()
  }
}
