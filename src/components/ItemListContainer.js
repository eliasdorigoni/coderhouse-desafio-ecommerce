const ItemListContainer = ({products}) =>
    <div className="grid grid-cols-3 gap-4">
        {products.map(product =>
            <div key={product.title} className="bg-white text-black rounded-md overflow-hidden">
                <div className="relative">
                    <img src={product.thumbnail_url} alt="" className="mb-2" />
                    <p className="bg-yellow-500 text-white text-lg absolute right-2 bottom-2 p-2 leading-4"
                        title={product.price + " créditos"}>
                        {product.price} CR
                    </p>
                </div>
                <div className="mx-2 mb-2">
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <p className="text-gray-400">{product.model}</p>
                    <p>Ver más...</p>
                    <button className="bg-green-500 px-3 py-1 rounded" type="button">Agregar al carrito</button>
                </div>
            </div>
        )}
    </div>

export default ItemListContainer