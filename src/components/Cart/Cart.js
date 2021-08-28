import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from './CartContext'
import OrderContainer from './../Order/OrderContainer'

const Cart = () => {
    let context = useContext(CartContext)
    const [cartDetails, setCartDetails] = useState()
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if (context.items.length === 0) {
            setCartDetails([])
            return
        }

        let price = 0
        setCartDetails(
            context.items.map(item => {
                price += item.original.price * item.quantity
                return {
                    id: item.id,
                    title: item.original.title,
                    price: item.original.price,
                    quantity: item.quantity,
                    pictureUrl: item.original.pictureUrl,
                }
            })
        )
        setTotalPrice(price)

    }, [context.items]) //eslint-disable-line
    // TODO: https://betterprogramming.pub/why-eslint-hates-your-useeffect-dependencies-react-js-560fcac0b1f

    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' })

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
            <>
                <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="col-span-3">
                        <h1 className="text-2xl font-bold mb-2">Carrito</h1>
                        <table className="table-auto cart-details w-full">
                            <thead>
                                <tr>
                                    <th className="text-left" colSpan="2">Producto</th>
                                    <th className="text-right">Precio unitario</th>
                                    <th className="text-right">Precio total</th>
                                    <th className="text-center">Acciones</th>
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
                    <div>
                        <OrderContainer cart={cartDetails} />
                    </div>
                </div>
            </>
        )
    }
}

export default Cart