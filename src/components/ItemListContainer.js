import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const { id } = useParams()
    const [items, setItems] = useState()

    useEffect(() => {
        fetch('/data/items.json')
            .then(response => response.json() )
            .then(json => {
                if (id) {
                    json = json.filter(item => item.category === id)
                }
                setItems(json)
            })
    }, [id])

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer
