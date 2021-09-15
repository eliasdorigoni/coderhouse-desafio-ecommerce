import Item from './Item'
import ItemPlaceholder from './ItemPlaceholder'

const ItemList = ({items}) => {
    if (typeof items === 'undefined') {
        return (
            <>
            <ItemPlaceholder />
            <ItemPlaceholder />
            <ItemPlaceholder />
            </>
        )
    }

    if (items.length === 0) {
        return (
            <p>No hay productos en esta categoría.</p>
        )
    }

    return (
        items.map(item => <Item key={item.id} item={item} /> )
    )
}

export default ItemList