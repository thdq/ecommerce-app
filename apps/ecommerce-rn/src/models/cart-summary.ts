import { ProductModel } from './product'

export type CartSummary = {
  list: ProductModel[]
}

export class CartSummaryModel implements CartSummary {
  totalItens: number
  totalRawPrice: number
  totalPriceWithShipping: number
  totalShippingTax: number
  list: ProductModel[]
  constructor(list: ProductModel[]) {
    this.list = list

    const { totalItens, totalRawPrice, totalPriceWithShipping, totalShippingTax } = list.reduce(
      (accumulator, product) => {
        const totalItens = accumulator.totalItens + product.getAddedQuantity()
        const totalRawPrice = accumulator.totalRawPrice + product.price
        const totalPriceWithShipping =
          accumulator.totalPriceWithShipping + product.getPriceWithShipping()
        const totalShippingTax = accumulator.totalShippingTax + product.getShippingTax()

        return {
          totalItens,
          totalRawPrice,
          totalPriceWithShipping,
          totalShippingTax,
        }
      },
      {
        totalRawPrice: 0,
        totalItens: 0,
        totalPriceWithShipping: 0,
        totalShippingTax: 0,
      },
    )
    this.totalItens = totalItens
    this.totalRawPrice = totalRawPrice
    this.totalPriceWithShipping = totalPriceWithShipping
    this.totalShippingTax = totalShippingTax
  }

  isFreeShipping(): boolean {
    if (this.totalShippingTax === 0) return true
    return false
  }

  getFormattedShippingTax(): string {
    return this.totalShippingTax.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  getFormattedTotalPriceWithShipping(): string {
    return this.totalPriceWithShipping.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  }
}
