import { CartSummaryModelAtom } from '@app/store'
import { useSetAtom } from 'jotai'
import { ProductModel } from '@app/models'

export const useCart = () => {
  const setCartSummary = useSetAtom(CartSummaryModelAtom)

  const addToCart = (product: ProductModel, quantity = 1) => {
    setCartSummary((state: ProductModel[]) => {
      product.setQuantity(quantity)
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
