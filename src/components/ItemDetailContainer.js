import { useState, useEffect, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from './../firebase'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [ item, setItem ] = useState()
    const { id } = useParams()

    useEffect(() => {
        getFirestore().collection('products').doc(id).get()
            .then(querySnapshot => {
                setItem({id: id, ...querySnapshot.data()})
            })
            .catch(() => setItem({}))
    }, [id])

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer