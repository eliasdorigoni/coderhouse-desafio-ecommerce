import Item from './Item'

const ItemList = ({items}) => {
    return items
        ? ( items.map(item => <Item product={item} /> ) )
        : ( <span class="loader"></span> )
}

export default ItemList