import { makePurchase } from '@app/api'

export const useCheckout = () => {
  return {
    purchase: async () => {
      return await makePurchase()
    },
  }
}
