import { useContext } from "react"
import CartContext from "./CartContext"
import Cart from "./Cart"
import MiniCart from "./MiniCart"

const CartContainer = ({template}) => {
    let context = useContext(CartContext)

    if (typeof template === 'string' && template === 'minicart') {
        return (
            <MiniCart
                items={context.items}
                totalPrice={context.getTotalPrice()}
            />
        )
    } else {
        return (
            <Cart
                items={context.items}
                totalPrice={context.getTotalPrice()}
                onRemoveItem={context.removeItem}
            />
        )
    }
}

export default CartContainer