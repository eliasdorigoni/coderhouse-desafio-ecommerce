import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from './CartContext'

const CartWidget = () => {
    const context = useContext(CartContext)
    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' })

    return (
        <div className="container mx-auto mb-4 font-body pr-4 text-right">
            <Link to={'/cart'} className="button bg-red-500 hover:bg-red-450 px-2 py-1 inline-block">
                <img className="w-5 inline-block align-middle mr-2" src="/svg/shopping-cart.svg" alt="Carrito" />
                &#8371; <span>{priceFormatter.format(context.getTotalPrice())} </span>
                <span className="opacity-70">({
                    context.getTotalQuantity() === 1
                        ? '1 item'
                        : context.getTotalQuantity() + ' items'
                })</span>

            </Link>
        </div>
    )
}

export default CartWidget