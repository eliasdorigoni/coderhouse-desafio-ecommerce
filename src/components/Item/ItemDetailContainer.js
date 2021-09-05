import { useState, useEffect, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from './../../firebase'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [ item, setItem ] = useState()
    const { id } = useParams()

    useEffect(() => {
        getFirestore().collection('items').doc(id).get()
            .then(querySnapshot => {
                if (querySnapshot.exists) {
                    setItem({id: id, ...querySnapshot.data()})
                } else {
                    setItem({})
                }
            })
            .catch(error => {
                setItem({})
            })
    }, [id])

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="py-4">
            <ItemDetail item={item} />
        </section>
    )
}

export default ItemDetailContainer