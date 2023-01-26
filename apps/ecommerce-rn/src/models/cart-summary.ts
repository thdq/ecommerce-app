import { ProductModel } from './product'

export type CartSummary = {
  list: ProductModel[]
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

export class CartSummaryModel implements CartSummary {
  totalItens: number
  totalRawPrice: number
  totalPriceWithShipping: number
  totalShippingTax: number
  list: ProductModel[]
  private static staticList: ProductModel[]
  constructor(list: ProductModel[]) {
    this.list = list
    CartSummaryModel.staticList = list

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

  static getList(): ProductModel[] {
    return this.staticList || []
  }
}
