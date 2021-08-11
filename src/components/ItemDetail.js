import ItemCount from './ItemCount'

const ItemDetail = ({ item, onAddToCart }) => {
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

    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' });

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

                        <ItemCount
                            stock={item.stock}
                            initial={item.stock > 1 ? 1 : 0}
                            onAdd={onAddToCart} />
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