import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from './CartContext'

const CartWidget = () => {
    const context = useContext(CartContext)

    return (
        <div className="container mx-auto mb-4 font-body pr-4 text-right">
            <Link to={'/cart'} className="button bg-red-500 hover:bg-red-450 px-2 py-1 inline-block">
                <img className="w-5 inline-block align-middle mr-2" src="/svg/shopping-cart.svg" alt="Carrito" />
                <span>{context.getTotalQuantity()} {context.getTotalQuantity() === 1 ? 'item' : 'items'}</span> &mdash; &#8371; <span>{context.getTotalPrice()} </span>
            </Link>
        </div>
    )
}

export default CartWidget