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
  inCart: boolean
  private quantity: number
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

  setQuantity(quantity: number) {
    this.quantity = quantity
  }

  getAddedQuantity() {
    if (!this.inCart) throw new Error('Product not in cart, you must add to cart to get quantity')

    return this.quantity
  }
}

export { Product }
