export type ProductToCartType = {
  id: string
  title: string
  quantity: number
  price: number
  thumbnail: string
}

export type CartSummaryType = {
  totalItens: number
  totalPrice: number
  list: ProductToCartType[]
}
