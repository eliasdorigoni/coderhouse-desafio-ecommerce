import Order from "./Order"

const Orders = ({orders}) => {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Mis órdenes</h1>
            {!orders &&
            <p><span className="loader"></span> Buscando tus ordenes...</p>}

            {orders && orders.length === 0 &&
            <p>Todavía no hiciste ningún pedido. &lt;/3</p>}

            {orders && orders.length > 0 && orders.map(order => <Order key={order.id} order={order} />)}
        </>
    )
}

export default Orders