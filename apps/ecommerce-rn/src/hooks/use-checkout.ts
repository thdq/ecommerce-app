import { makePurchase } from '../api/purchase'

export const useCheckout = () => {
  return {
    purchase: async () => {
      return await makePurchase()
    },
  }
}
