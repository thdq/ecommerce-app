import { useAtom } from 'jotai'
import { cartSummaryAtom } from '../atoms'
import { ProductToCartType } from '../models/cart-summary'

export const useAddToCart = () => {
  const [cartSummary, setCartSummary] = useAtom(cartSummaryAtom)

  return {
    addToCart: (productToAdd: ProductToCartType) => {
      const updatedProductsCartList = [...cartSummary.list, productToAdd]

      const summary = updatedProductsCartList.reduce(
        (accumulator, totals) => {
          return {
            totalItens: accumulator.totalItens + totals.quantity,
            totalPrice: accumulator.totalPrice + totals.price,
          }
        },
        {
          totalPrice: cartSummary.totalPrice,
          totalItens: cartSummary.totalItens,
        },
      )

      setCartSummary({
        ...summary,
        list: updatedProductsCartList,
      })
    },
  }
}
