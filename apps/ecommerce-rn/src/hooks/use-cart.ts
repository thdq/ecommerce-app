import { useAtom } from 'jotai'
import { cartSummaryAtom } from '../atoms'
import { ProductToCartType } from '../models/cart-summary'
import { Product } from '../models/product'

const updateSummary = (list: ProductToCartType[]) => {
  const infos = list.reduce(
    (accumulator, product) => {
      const totalItens = accumulator.totalItens + product.quantity
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
      const { title, id, price, thumbnail } = productToAdd
      const updatedProductsCartList = [
        ...cartSummary.list,
        {
          title,
          id,
          price,
          thumbnail,
          quantity,
        },
      ]

      const summary = updateSummary(updatedProductsCartList)
      setCartSummary(summary)

      productToAdd.markAsInCart()
    },
    removeFromCart: (productToRemove: Product) => {
      const updatedProductsCartList = cartSummary.list.filter(
        (product) => product.id !== productToRemove.id,
      )

      const summary = updateSummary(updatedProductsCartList)
      setCartSummary(summary)

      productToRemove.unMarkFromCart()
    },
  }
}
