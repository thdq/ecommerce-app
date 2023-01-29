import { CartSummaryModelAtom } from '@app/store'
import { useSetAtom } from 'jotai'
import { ProductModel } from '@app/models'

export const useCart = () => {
  const setCartSummary = useSetAtom(CartSummaryModelAtom)

  const addToCart = (product: ProductModel) => {
    setCartSummary((prev: ProductModel[]) => [...prev, product])
  }

  const removeFromCart = (product: ProductModel) => {
    setCartSummary((prev: ProductModel[]) => prev.filter((p: ProductModel) => p.id !== product.id))
  }

  const clearCart = () => {
    setCartSummary([])
  }

  return { addToCart, removeFromCart, clearCart }
}
