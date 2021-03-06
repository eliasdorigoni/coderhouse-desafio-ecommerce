import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from './../Cart/CartContext'

const Item = ({item}) => {
    const context = useContext(CartContext)
    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' })
    return (
        <div key={item.id} className="product-card-wrapper">
            <div className="bg-white text-black product-card cut-corners">
                <Link to={'/item/' + item.id}>
                    <div className="relative">
                        <img src={item.thumbnail} alt="" />
                        <div className="product-thumbnail-header absolute bottom-0 left-0 right-0
                            text-white bg-black bg-opacity-25 transition-all">
                            <div className="px-4 py-2 transition-all">
                                <h2 className="text-xl font-bold">{item.title}</h2>
                                <p className="text-sm opacity-75" title={item.price + " créditos"}>
                                    &#8371; {priceFormatter.format(item.price)}
                                </p>
                            </div>
                        </div>

                        { context.isInCart(item.id) &&
                        <div title="En el carrito"
                            className="absolute bottom-20 bg-yellow-400 text-gray-800 pl-1 py-1 pr-3 pl-3 rounded-r-full">
                            <img className="w-6 inline-block align-middle"
                                    src="/svg/cart-dark.svg"
                                    alt="En el carrito" />
                        </div> }
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item