import { useAtom } from 'jotai'
import { cartSummaryAtom } from '../atoms'
import { Product } from '../models/product'

const updateSummary = (list: Product[]) => {
  const infos = list.reduce(
    (accumulator, product) => {
      console.log(product)
      const totalItens = accumulator.totalItens + product.getAddedQuantity()
      const totalPrice = accumulator.totalPrice + product.price

      return {
        totalItens,
        totalPrice,
      }
    },
    {
      totalPrice: 0,
      totalItens: 0,
    },
  )
  return {
    ...infos,
    list,
  }
}

export const useCart = () => {
  const [cartSummary, setCartSummary] = useAtom(cartSummaryAtom)

  return {
    addToCart: (productToAdd: Product, quantity = 1) => {
      productToAdd.setQuantity(quantity)
      const updatedProductsCartList = [...cartSummary.list].concat([productToAdd])

      productToAdd.markAsInCart()

      const summary = updateSummary(updatedProductsCartList)
      setCartSummary(summary)
    },
    removeFromCart: (productToRemove: Product) => {
      const updatedProductsCartList = cartSummary.list.filter(
        (product) => product.id !== productToRemove.id,
      )
      productToRemove.setQuantity(-1)
      productToRemove.unMarkFromCart()

      const summary = updateSummary(updatedProductsCartList)
      setCartSummary(summary)
    },
    getCartSummary: () => {
      return cartSummary
    },
  }
}
