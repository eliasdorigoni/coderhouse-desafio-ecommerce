import { useContext } from "react"
import CartContext from "./CartContext"
import Cart from "./Cart"

const CartContainer = () => {
    let context = useContext(CartContext)

    console.log(context.getTotalPrice())

    return (
        <Cart
            items={context.items}
            totalPrice={context.getTotalPrice()}
            onRemoveItem={context.removeItem}
        />
    )
}

export default CartContainer