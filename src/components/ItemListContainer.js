const ItemListContainer = ({products}) =>
    <div className="grid grid-cols-3 gap-4">
        {products.map(product =>
            <div key={product.title} className="bg-white text-black rounded-md overflow-hidden">
                <img src={product.thumbnail_url} alt="" />
                <div className="mx-2 mb-2">
                    <h2>{product.title}</h2>
                    <h3>{product.model}</h3>
                    <p>Ver más...</p>
                    <button className="bg-green-500 px-3 py-1 rounded" type="button">Agregar al carrito</button>
                </div>
            </div>
        )}
    </div>

export default ItemListContainer