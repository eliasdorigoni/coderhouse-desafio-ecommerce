import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const Cart = ({items, totalPrice, onRemoveItem}) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' })

    if (items.length === 0) {
        return (
            <div>
                <p>No hay productos en el carrito.</p>
                <p><Link to="/" className="hover:underline">Volver a home</Link></p>
            </div>
        )
    } else {
        return (
            <>
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
                            {items.map(item =>
                                <tr key={item.id}>
                                    <td>
                                        <Link to={'/item/' + item.id} className="inline-block">
                                            <img className="w-10 rounded" src={item.thumbnail} alt="Portada del articulo" />
                                        </Link>
                                    </td>
                                    <td className="text-lg">
                                        <strong>{item.quantity}</strong> &times; {item.title}
                                    </td>
                                    <td className="text-right">&#8371; {priceFormatter.format(item.price)}</td>
                                    <td className="text-right">&#8371; {priceFormatter.format(item.price * item.quantity)}</td>
                                    <td className="text-center">
                                        <button
                                            className="bg-red-500 active:bg-red-400 rounded px-3 py-1 inline-block m-2 text-xs"
                                            type="button" onClick={() => {onRemoveItem(item.id)}}>&times; Remover</button>
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
                                    <strong>&#8371; {priceFormatter.format(totalPrice)}</strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="text-center">
                    <Link to="/checkout" className="bg-green-500 hover:bg-green-600 text-center button">
                        <img src="/svg/right-arrow.svg" alt="Icono continuar"
                            className="h-3 w-3 inline-block align-middle mr-2 relative bottom-px" />
                        Finalizar compra...
                    </Link>
                </div>
            </>
        )
    }
}

export default Cart