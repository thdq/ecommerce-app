import { Product } from './product'

export type CartSummary = {
  list: Product[]
}

export class CartSummaryModel implements CartSummary {
  private totalItens: number
  private totalPrice: number
  list: Product[]
  constructor(list: Product[]) {
    this.list = list
  }
}
