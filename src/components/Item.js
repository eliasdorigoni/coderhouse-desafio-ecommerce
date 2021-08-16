import { useContext } from 'react'
import CartContext from './CartContext';
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    let context = useContext(CartContext)

    console.log()

    let existsInCartBadge = ''
    if (context.isInCart(product.id)) {
        existsInCartBadge = <div className="absolute bottom-5 bg-yellow-400 text-gray-800 pl-1 py-1 pr-3 rounded-r-full">
            <img className="w-6 inline-block align-middle"
                src="/svg/cart-dark.svg"
                alt="En el carrito" />
        </div>
    }

    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' });
    return (
        <div key={product.id} className="bg-white text-black product-card">
            <Link to={'/item/' + product.id}>
                <div className="relative">
                    <img src={product.pictureUrl} alt="" />
                    <div className="absolute top-0 left-0 right-0 text-white
                        product-thumbnail-header">
                        <div className="px-2 pb-8">
                            <h2 className="text-xl font-bold">{product.title}</h2>
                            <p className="text-sm opacity-75" title={product.price + " créditos"}>{priceFormatter.format(product.price)} CR</p>
                        </div>
                    </div>

                    {existsInCartBadge}
                </div>
            </Link>
        </div>
    )
}

export default Item