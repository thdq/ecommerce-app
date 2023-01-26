import { makePurchase } from '@api'

export const useCheckout = () => {
  return {
    purchase: async () => {
      return await makePurchase()
    },
  }
}
