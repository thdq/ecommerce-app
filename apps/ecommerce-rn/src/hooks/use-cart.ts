import { cartSummaryAtom } from '@app/store'
import { useReducerAtom } from 'jotai/utils'
import { ProductModel, Product } from '@app/models'

type CartReducerAction = {
  payload: ProductModel
  type: 'ADD' | 'REMOVE' | 'RESET'
}

export const useCart = () => {
  const cartReducer = (state: Product[], action: CartReducerAction) => {
    switch (action.type) {
      case 'ADD':
        action?.payload?.addToCart()
        return [...state, action.payload]
      case 'REMOVE':
        action?.payload?.removeFromCart()
        return state.filter((product) => product.id !== action?.payload?.id)
      case 'RESET':
        return []
      default:
        throw new Error('unknown action type')
    }
  }

  const [products, dispatchCart] = useReducerAtom(cartSummaryAtom, cartReducer)

  return { products, dispatchCart }
}
