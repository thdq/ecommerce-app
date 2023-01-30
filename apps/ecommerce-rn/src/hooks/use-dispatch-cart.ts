import { cartSummaryAtom } from '@app/store'
import { useSetAtom } from 'jotai'
import { CartSummary, mapCartSummary, ProductModel } from '@app/models'

export const useDispatchCart = () => {
  const setCartSummary = useSetAtom(cartSummaryAtom)

  const addToCart = (product: ProductModel, quantity = 1) => {
    product.setQuantity(quantity)
    setCartSummary((state: CartSummary) => {
      const currentList = state?.list || []
      return mapCartSummary([...currentList, product])
    })
  }

  const removeFromCart = (product: ProductModel) => {
    setCartSummary((state: CartSummary) => {
      const currentList = state?.list || []
      return mapCartSummary(currentList.filter((p: ProductModel) => p.id !== product.id))
    })
  }

  const clearCart = () => {
    setCartSummary(mapCartSummary([]))
  }

  return { addToCart, removeFromCart, clearCart }
}
