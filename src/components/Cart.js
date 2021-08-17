import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from './CartContext'

const Cart = () => {
    let context = useContext(CartContext)
    const [cartDetails, setCartDetails] = useState()
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if (context.items.length === 0) {
            setCartDetails([])
            return
        }

        const itemIdsInCart = context.getIds()

        fetch('/data/items.json')
            .then(response => response.json() )
            .then(json => {
                json = json.filter(item => itemIdsInCart.includes(item.id))
                    .map(item => {
                        item.quantity = context.getProductQuantity(item.id)
                        return item
                    })

                setCartDetails(json)

                if (json.length === 0) {
                    setTotalPrice(0)
                } else if (json.length === 1) {
                    setTotalPrice(json[0].quantity * json[0].price)
                } else {
                    setTotalPrice(json.reduce((sum, item) => {
                        if (typeof sum === 'object') {
                            sum = sum.quantity * sum.price
                        }
                        return sum + (item.quantity * item.price)
                    }))
                }
            })
    }, [context.items]) //eslint-disable-line
    // TODO: https://betterprogramming.pub/why-eslint-hates-your-useeffect-dependencies-react-js-560fcac0b1f

    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' });

    if (typeof cartDetails === 'undefined') {
        return (
            <div>
                <span className="loader"></span>
            </div>
        )
    } else if (cartDetails.length === 0) {
        return (
            <div>
                <p>No hay productos en el carrito.</p>
                <p><Link to="/" className="hover:underline">Volver a home</Link></p>
            </div>
        )
    } else {
        return (
            <div>
                <table className="table-auto cart-details">
                    <thead>
                        <tr>
                            <th className="text-left" colSpan="2">Producto</th>
                            <th className="text-right">Precio unitario</th>
                            <th className="text-right">Precio total</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartDetails.map(item =>
                            <tr key={item.id}>
                                <td>
                                    <Link to={'/item/' + item.id} className="inline-block">
                                        <img className="w-10 rounded" src={item.pictureUrl} alt="Portada del articulo" />
                                    </Link>
                                </td>
                                <td className="text-lg">
                                    <strong>{item.quantity}</strong> &times; {item.title}
                                </td>
                                <td className="text-right">{priceFormatter.format(item.price)} CR</td>
                                <td className="text-right">{priceFormatter.format(item.price * item.quantity)} CR</td>
                                <td>
                                    <button
                                        className="bg-red-500 active:bg-red-400 rounded px-3 py-1 inline-block m-2 text-xs"
                                        type="button" onClick={() => {context.removeItem(item.id)}}>&times; Remover</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr className="text-xl">
                            <td colSpan="2">
                                Precio final
                            </td>
                            <td colSpan="3" className="text-right">
                                <strong>{priceFormatter.format(totalPrice)} CR</strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default Cart