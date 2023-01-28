import { cartSummaryAtom } from '@app/store'

import { useSetAtom } from 'jotai'
import { ProductModel } from '@app/models'

export const useCart = () => {
  const setCartSummary = useSetAtom(cartSummaryAtom)

  const addToCart = (product: ProductModel) => {
    setCartSummary((prev) => [...prev, product])
  }

  const removeFromCart = (product: ProductModel) => {
    setCartSummary((prev) => prev.filter((p) => p.id !== product.id))
  }

  const clearCart = () => {
    setCartSummary([])
  }

  return { addToCart, removeFromCart, clearCart }
}
