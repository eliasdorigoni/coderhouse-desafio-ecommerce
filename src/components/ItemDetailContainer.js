import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const { id } = useParams()

    useEffect(() => {
        // Si bien fetch() devuelve una promise, se usa "new Promise" para cumplir con los requisitos.
        const getItem = new Promise((resolve, reject) => {
            fetch('/data/items.json')
                .then(response => response.json())
                .then(json => {
                    const expectedItem = json.find(item => item.id === id)
                    if (expectedItem) {
                        resolve(expectedItem)
                    } else {
                        reject()
                    }
                })
        })

        getItem
            .then((item) => setItem(item))
            .catch(() => setItem({}))
    }, [id])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer