const MiniCart = ({items, totalPrice}) => {
    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' })
    if (items.length === 0) {
        return (
            <div>
                <p>No hay productos en el carrito.</p>
            </div>
        )
    } else {
        return (
            <>
                <h1 className="text-xl mb-2">Este es tu pedido:</h1>
                <table className="table-auto cart-details w-full text-sm mb-8">
                    <thead>
                        <tr>
                            <th className="text-left">Producto</th>
                            <th className="text-right">Precio unitario</th>
                            <th className="text-right">Precio total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item =>
                            <tr key={item.id}>
                                <td className="text">
                                    <strong>{item.quantity}</strong> &times; {item.variantTitle ?? item.title}
                                </td>
                                <td className="text-right">&#8371; {priceFormatter.format(item.price)}</td>
                                <td className="text-right">&#8371; {priceFormatter.format(item.price * item.quantity)}</td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                Precio final
                            </td>
                            <td colSpan="2" className="text-right">
                                <strong>&#8371; {priceFormatter.format(totalPrice)}</strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </>
        )
    }
}

export default MiniCart