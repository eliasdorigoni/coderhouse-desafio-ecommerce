import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import CartContext from './../Cart/CartContext'

const ItemDetail = ({ item }) => {
    let context = useContext(CartContext)
    if (typeof item === 'undefined') {
        return (
            <span className="loader"></span>
        )
    }

    if (item && Object.keys(item).length === 0 && item.constructor === Object) {
        return (
            <p>El producto que estás buscando no existe.</p>
        )
    }

    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' })

    const counterComponent = (
        <ItemCount
            item={item}
            stock={item.stock}
            initial={item.stock > 0 ? 1 : 0}
            onAdd={context.addItem} />
    )
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
        <div key={item.id}>
            <div className="grid grid-cols-2 gap-4 p-2">
                <div>
                    <img src={item.pictureUrl}
                        alt={"Imagen de " + item.title}
                        />
                </div>
                <div>
                    <div className="mx-2 mb-2">
                        <h2 className="text-4xl font-bold">{item.title}</h2>
                        <p className="text-gray-400">{item.description}</p>

                        <p className="text-lg mb-4 leading-4 font-bold"
                            title={item.price + " créditos"}>
                            {priceFormatter.format(item.price)} CR
                        </p>

                        { context.getProductQuantity(item.id) === 0
                            ? counterComponent
                            : checkoutButton }
                    </div>

                    <h3 className="text-3xl">Descripción del mech</h3>

                    <p className="mb-2">
                        { item.longDescription
                            ? item.longDescription
                            : <em>No hay descripción disponible</em>
                        }</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail