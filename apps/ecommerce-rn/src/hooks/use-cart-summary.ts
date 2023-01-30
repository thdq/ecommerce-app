import { cartSummaryAtom } from '@app/store'
import { useAtomValue } from 'jotai'

export const useCartSummary = () => {
  const cartSummary = useAtomValue(cartSummaryAtom)
  return { cartSummary }
}
