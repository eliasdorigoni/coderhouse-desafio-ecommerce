import { useContext } from 'react'
import CartContext from './CartContext'

const CartWidget = () => {
    let context = useContext(CartContext)

    return (
        <>
            <img className="w-5 inline-block align-middle mr-2"
                src="/svg/shopping-cart.svg"
                alt="Carrito" />
            <span>{context.getTotalQuantity()}</span>
        </>
    )
}

export default CartWidget