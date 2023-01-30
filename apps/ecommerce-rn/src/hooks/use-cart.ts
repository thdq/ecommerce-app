import { cartSummaryModelAtom } from '@app/store'
import { useSetAtom } from 'jotai'
import { ProductModel } from '@app/models'

export const useCart = () => {
  const setCartSummary = useSetAtom(cartSummaryModelAtom)

  const addToCart = (product: ProductModel, quantity = 1) => {
    product.setQuantity(quantity)
    setCartSummary((state: ProductModel[]) => {
      return [...state, product]
    })
  }

  const removeFromCart = (product: ProductModel) => {
    setCartSummary((state: ProductModel) => state.filter((p: ProductModel) => p.id !== product.id))
  }

  const clearCart = () => {
    setCartSummary([])
  }

  return { addToCart, removeFromCart, clearCart }
}
