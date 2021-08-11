import { useState, useEffect } from 'react'

const CartWidget = ({ itemCount }) => {
    const [ bgColor, setBgColor] = useState('cart-bg-color')

    useEffect(() => {
        if (itemCount > 0) {
            setBgColor('cart-bg-color--flash')
            setTimeout(() => {
                setBgColor('cart-bg-color')
            }, 400);
        }
    }, [ itemCount ])

    return (
        <div className={"mb-4 p-2 " + bgColor}>
            <img src="/svg/shopping-cart.svg" className="w-5 inline-block align-middle mr-2" alt="Carrito" />
            <span>Tenes {itemCount} {itemCount === 1 ? 'producto' : 'productos'} en el carrito.</span>
        </div>
    )
}

export default CartWidget