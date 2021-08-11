const CartWidget = ({ itemCount }) =>
    <>
        <img src="/svg/shopping-cart.svg" className="w-5 inline-block align-middle mr-2" alt="Carrito" /> <span>{itemCount}</span>
    </>

export default CartWidget