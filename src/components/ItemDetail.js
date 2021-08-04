const ItemDetail = ({ item }) => {
    if (!item) {
        return (
            <span className="loader"></span>
        )
    }

    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' });

    return (
        <div key={item.id} className="
            bg-white
            text-black
            rounded-md">
            <div className="grid grid-cols-5 gap-2 p-2">
                <div className="col-span-2">
                    <img src={item.pictureUrl} alt={"Imagen de " + item.title}
                        className="rounded" />
                </div>
                <div className="col-span-3">
                    <div className="mx-2 mb-2">
                        <h2 className="text-xl font-bold">{item.title}</h2>
                        <p className="text-gray-400">{item.description}</p>
                        <p className="mb-2">{item.longDescription}</p>
                        <p className="text-lg mb-4 leading-4 font-bold"
                            title={item.price + " créditos"}>
                            {priceFormatter.format(item.price)} CR
                        </p>
                        <div className="clear-both">
                            <button className="bg-green-500 px-3 py-1 rounded text-white float-right"
                                type="button">
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail