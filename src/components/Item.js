const Item = ({product}) => {
    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' });
    return (
        <div key={product.id} className="
            bg-white
            text-black
            rounded-md
            product-card
            overflow-hidden">
            <div className="relative">
                <img src={product.pictureUrl} alt="" className="mb-2" />
                <p className="bg-yellow-500 text-white text-lg absolute right-2 bottom-2 p-2 leading-4"
                    title={product.price + " créditos"}>
                    {priceFormatter.format(product.price)} CR
                </p>
            </div>
            <div className="mx-2 mb-2">
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="text-gray-400">{product.description}</p>
                <p>Ver más...</p>
                <div className="text-right">
                    <button className="bg-green-500 px-3 py-1 rounded text-white" type="button">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item