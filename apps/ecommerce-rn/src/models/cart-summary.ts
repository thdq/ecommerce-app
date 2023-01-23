import { Product } from './product'

export type CartSummary = {
  totalItens: number
  totalPrice: number
  list: Product[]
}
