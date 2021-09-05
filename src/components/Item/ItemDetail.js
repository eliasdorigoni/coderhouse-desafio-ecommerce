import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import CartContext from './../Cart/CartContext'
import ItemDetailNotFound from './ItemDetailNotFound'
import ItemPictureSlider from './ItemPictureSlider'
import Title from '../Misc/Title'

const ItemDetail = ({ item }) => {
    let context = useContext(CartContext)
    if (typeof item === 'undefined') {
        return (
            <span className="loader"></span>
        )
    }

    if (item && Object.keys(item).length === 0 && item.constructor === Object) {
        return <ItemDetailNotFound />
    }

    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' })

    const checkoutButton = (
        <>
            <div className="border-1 border-white rounded text-center mb-6 py-2 max-w-md mx-auto">

                <Link className="button bg-green-600 active:bg-green-500 inline-block m-2"
                    to="/cart">
                    <img className="w-5 inline-block align-middle mr-2"
                        src="/svg/shopping-cart.svg"
                        alt="Carrito" />
                    Ir al carrito (terminar mi compra)
                </Link>

                <br />

                <button type="button"
                    onClick={() => context.removeItem(item.id)}
                    className="button bg-red-500 active:bg-red-400 inline-block m-2">
                    &times;
                    Remover del carrito
                </button>

                <button type="button"
                    onClick={context.clear}
                    className="button bg-yellow-500 active:bg-yellow-300 inline-block m-2">
                    <img className="w-5 inline-block align-middle mr-2"
                        src="/svg/broom-light.svg"
                        alt="Limpiar" />
                    Limpiar todo
                </button>
            </div>

        </>
    )

    return (
        <section className="pb-12">
            <Title>{item.title}</Title>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <ItemPictureSlider pictures={item.gallery} />
                </div>
                <div>
                    <div className="border-white border-opacity-40 border-1 p-2">

                        <div className="mb-2">
                            <p className="text-gray-400 mb-4">{item.description}</p>

                            <p className="text-3xl mb-4 leading-4 tracking-tight"
                                title={item.price + " créditos"}>
                                {priceFormatter.format(item.price)} &#1051;
                            </p>

                            { context.getProductQuantity(item.id) === 0
                                ? <ItemCount item={item} stock={item.stock}
                                    initial={item.stock > 0 ? 1 : 0} onAdd={context.addItem} />
                                : checkoutButton }
                        </div>


                        <h3 className="text-2xl">Envío</h3>
                        <div className="mb-8">
                            <p>
                                <span className="text-green-400">Llega en 10 días</span> por 2600 &#1051;.
                            </p>
                        </div>


                        <h3 className="text-2xl">Devolución</h3>
                        <div className="mb-8">
                            <p>Devolución gratis</p>
                            <p>Tenés 30 días desde que lo recibís.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail