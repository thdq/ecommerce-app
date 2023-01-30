import { ProductModel } from './product'

export type CartSummary = {
  list: ProductModel[]
  hasProduct: (productId: string | number) => boolean
}

const getPricesAndTotalItens = (list: ProductModel[]) =>
  list.reduce(
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

export class CartSummaryModel {
  totalItens: number
  totalRawPrice: number
  totalPriceWithShipping: number
  totalShippingTax: number
  list: ProductModel[]
  constructor(list: ProductModel[]) {
    this.list = list

    const { totalItens, totalRawPrice, totalPriceWithShipping, totalShippingTax } =
      getPricesAndTotalItens(list)

    this.totalItens = totalItens
    this.totalRawPrice = totalRawPrice
    this.totalPriceWithShipping = totalPriceWithShipping
    this.totalShippingTax = totalShippingTax
  }

  hasItens(): boolean {
    return this.list.length >= 1
  }

  isFreeShipping(): boolean {
    if (Number(this.totalShippingTax.toFixed(2)) === 0) return true
    return false
  }

  getFormattedShippingTax(): string {
    return Number(this.totalShippingTax.toFixed(2)).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  getFormattedTotalPriceWithShipping(): string {
    return Number(this.totalPriceWithShipping.toFixed(2)).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  hasProduct(productId: string | number): boolean {
    return this.list.some((product) => String(product.id) === String(productId))
  }
}

export const mapCartSummary = (list: ProductModel[]): CartSummaryModel => {
  return new CartSummaryModel(list)
}
