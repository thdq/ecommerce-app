import { environment } from '@app/config'

const FAKE_PURCHASE = true

export const makePurchase = async (): Promise<{ isPurchased: boolean }> => {
  if (typeof environment.delayRequestsInSeconds === 'number')
    await new Promise((resolve) => setTimeout(resolve, environment.delayRequestsInSeconds * 1000))

  try {
    return await new Promise((resolve, reject) => {
      if (FAKE_PURCHASE)
        resolve({
          isPurchased: true,
        })
      else reject()
    })
  } catch {
    throw new Error('An error occurred while completing the purchase')
  }
}
