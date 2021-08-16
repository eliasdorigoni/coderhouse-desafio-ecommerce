import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import CartContext from './CartContext'

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

    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' });

    const counterComponent = (
        <ItemCount
            id={item.id}
            stock={item.stock}
            initial={item.stock > 0 ? 1 : 0}
            onAdd={context.addItem} />
    )
    const checkoutButton = (
        <>
            <div className="border-1 border-white rounded text-center mb-6 py-2 max-w-md mx-auto">
                <button type="button"
                    onClick={() => context.removeItem(item.id)}
                    className="bg-red-500 active:bg-red-400 rounded px-3 py-1 inline-block m-2"
                    >Eliminar este producto</button>

                <br />

                <Link className="bg-green-600 active:bg-green-500 rounded px-3 py-1 inline-block m-2"
                    to="/cart">Terminar mi compra</Link>

                <br />

                <button type="button"
                    onClick={context.clear}
                    className="bg-yellow-500 active:bg-yellow-300 rounded px-3 py-1 inline-block m-2"
                    >Limpiar todo el carrito</button>
            </div>

        </>
    )

    return (
        <div key={item.id}>
            <div className="grid grid-cols-2 gap-4 p-2">
                <div>
                    <img src={item.pictureUrl}
                        alt={"Imagen de " + item.title}
                        className="cut-corner" />
                </div>
                <div>
                    <div className="mx-2 mb-2">
                        <h2 className="text-4xl font-bold">{item.title}</h2>
                        <p className="text-gray-400">{item.description}</p>

                        <p className="text-lg mb-4 leading-4 font-bold"
                            title={item.price + " créditos"}>
                            {priceFormatter.format(item.price)} CR
                        </p>

                        { context.getQuantityForProduct(item.id) === 0
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