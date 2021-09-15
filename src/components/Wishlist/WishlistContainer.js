import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Wishlist from "./Wishlist";
import { getFirestore } from './../../firebase'
import PageNotFound from '../PageNotFound'
import firebase from 'firebase/app'

const WishlistContainer = () => {
    const { id } = useParams()
    const [ content, setContent ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)
    const [ items, setItems] = useState()

    useEffect(() => {
        const firestore = getFirestore()
        firestore.collection('wishlists')
            .doc(id)
            .get()
            .then(querySnapshot => {
                if (querySnapshot.exists) {
                    let data = querySnapshot.data()
                    setContent(data)
                    if (data.items.length === 0) {
                        setIsLoading(false)
                        setItems([])
                        return
                    }

                    firestore.collection('items')
                        .where(firebase.firestore.FieldPath.documentId(), 'in', data.items)
                        .get()
                        .then(querySnapshot => {
                            let items = querySnapshot.docs.map(doc => {
                                return {
                                    id: doc.id,
                                    ...doc.data()
                                }
                            })
                            setIsLoading(false)
                            setItems(items)
                        }).catch(error => {
                            setIsLoading(false)
                            setContent(null)
                        })

                } else {
                    setIsLoading(false)
                    setContent(null)
                }
            }).catch((error) => {
                setIsLoading(false)
                setContent(null)
            })
    }, [id])

    if (!isLoading && content == null) {
        return (
            <PageNotFound />
        )
    } else {
        return (
            <Wishlist content={content} items={items} isLoading={isLoading} />
        )
    }

}

export default WishlistContainer