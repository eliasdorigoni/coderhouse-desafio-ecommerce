import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
    const [amount, setAmount] = useState(0)

    if (typeof item === 'undefined') {
        return (
            <span className="loader"></span>
        )
    }

    if (Object.keys(item).length === 0 && item.constructor === Object) {
        return (
            <p>El producto que estás buscando no existe.</p>
        )
    }

    const onAddToCart = (e) => {
        setAmount(e)
    }

    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' });

    const checkoutButton = (<div className="border-1 border-white rounded text-center mb-6 py-2 max-w-md mx-auto">
        <Link className="bg-green-600 active:bg-green-500 rounded px-3 py-1"
            to="/cart">Terminar mi compra</Link>
    </div>)

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

                        { amount === 0 && <ItemCount stock={item.stock} initial={item.stock > 1 ? 1 : 0} onAdd={onAddToCart} /> }
                        { amount > 0 && checkoutButton}
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