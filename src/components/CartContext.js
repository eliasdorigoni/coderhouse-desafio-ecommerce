import { createContext } from 'react'

const CartContext = createContext()

export default CartContext

export const { Consumer, Provider } = CartContext