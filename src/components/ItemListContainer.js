const ItemListContainer = ({products}) =>
    <div>
        {products.map(product =>
            <div>
                {product.title}
            </div>
        )}
    </div>

export default ItemListContainer