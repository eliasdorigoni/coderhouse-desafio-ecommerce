import Item from './Item'

const ItemList = ({items}) => {
    if (typeof items === 'undefined') {
        return (
            <span className="loader"></span>
        )
    }

    if (items.length === 0) {
        return (
            <p>No hay productos en esta categoría.</p>
        )
    }

    return (
        items.map(item => <Item key={item.id} product={item} /> )
    )
}

export default ItemList