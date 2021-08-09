import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch('/data/items.json')
            .then(response => response.json())
            .then(json => {
                setProduct(
                    json.find(item => item.id === id)
                )
            })
    }, [id])

    return (
        <ItemDetail item={product} />
    )
}

export default ItemDetailContainer