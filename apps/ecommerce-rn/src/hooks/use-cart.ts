import { cartSummaryAtom } from '../atoms'
import { useReducerAtom } from 'jotai/utils'
import { ProductModel, ProductType } from '../models/product'

type CartReducerAction = {
  payload: ProductModel
  type: 'ADD' | 'REMOVE'
}

export const useCart = () => {
  const cartReducer = (state: ProductType[], action: CartReducerAction) => {
    switch (action.type) {
      case 'ADD':
        action.payload.addToCart()
        return [...state, action.payload]
      case 'REMOVE':
        action.payload.removeFromCart()
        return state.filter((product) => product.id !== action.payload.id)
      default:
        throw new Error('unknown action type')
    }
  }

  const [products, dispatchCart] = useReducerAtom(cartSummaryAtom, cartReducer)

  return { products, dispatchCart }
}
