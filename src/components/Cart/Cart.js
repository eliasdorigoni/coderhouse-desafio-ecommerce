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
                            {items.map(item =>
                                <tr key={item.id}>
                                    { console.log("Cart: ", item) }
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
                <div>
                    <Link to="/checkout" className="bg-green-500 p-8 pt-8 pb-6 inline-block rounded text-center">
                        <img src="/svg/right-arrow.svg" alt="Icono continuar"
                            className="h-12 w-12 inline-block align-middle mb-2" />
                        <span className="block">Continuar...</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Cart