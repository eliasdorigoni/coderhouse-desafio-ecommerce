import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from './../../firebase'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const { id } = useParams()
    const [ items, setItems ] = useState()

    useEffect(() => {
        let collection = getFirestore().collection('products')

        if (typeof id !== 'undefined') {
            collection = collection.where('category', '==', id)
        }

        collection.limit(20)
            .get()
            .then(querySnapshot => {
                setItems(querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                }))
            }).catch(() => setItems([]))
    }, [id])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer
