const ItemListContainer = ({products}) =>
    <div class="grid grid-cols-3 gap-4">
        {products.map(product =>
            <div className="bg-white text-black rounded-md">
                <img src={product.thumbnail_url} alt="" />
                <h2>{product.title}</h2>
                <h3>{product.model}</h3>
                <p>Ver más...</p>
                <button class="bg-green-500 px-4" type="button">Agregar al carrito</button>
            </div>
        )}
    </div>

export default ItemListContainer