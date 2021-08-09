const CartWidget = ({itemCount}) =>
    <div className="cartWidget text-right">
        <div className="text-xs pr-2 pt-1">
            <span>
                Mi carrito
            </span>
            <div className="relative inline-block">
                <img className="inline-block w-6 h-6"
                    alt="Carrito" src="/svg/cart.svg" />
                <span className="bg-red-500 text-white text-xs rounded-full
                    flex items-center justify-center h-4 w-4 absolute -top-1 -right-2"
                    >{itemCount}</span>
            </div>
        </div>
    </div>

export default CartWidget