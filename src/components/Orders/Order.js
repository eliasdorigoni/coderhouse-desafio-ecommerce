const Order = ({order}) => {
    const formatDate = (timestamp) => {
        let date = timestamp.toDate()
        console.log()
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} `
            + `${date.getHours()}:${date.getMinutes()}`
    }

    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' })

    return (
        <div key={order.id} className="bg-white bg-opacity-20 px-2 py-1 mb-4">
            <h2 className="font-bold text-2xl">Orden de <span className="text-yellow-300">&#8371; {priceFormatter.format(order.total)}</span></h2>
            <p className="text-sm italic text-gray-200 leading-tight mb-2">
                <strong>Creada:</strong> {formatDate(order.date)}<br />
                <strong>ID:</strong> {order.id}<br />
            </p>
            <p className="text-xl mb-2">Detalles</p>
            <ul className="pl-4">
                {order.items.map(item =>
                <li key={item.id} className="mb-2">
                    <p className="leading-none">
                        {item.quantity} &times; {item.title}<br />
                        <span className="text-sm block ml-2">
                            Subtotal: <span className="text-yellow-300">&#8371; {priceFormatter.format(item.quantity * item.price)}</span>
                        </span>
                    </p>
                </li>
                )}
            </ul>
        </div>
    )
}

export default Order