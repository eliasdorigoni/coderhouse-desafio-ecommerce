import { useState, useEffect, useLayoutEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from './../../firebase'
import ItemDetail from './ItemDetail'
import CartContext from './../Cart/CartContext'


const ItemDetailContainer = () => {
    const [ item, setItem ] = useState()
    const { id } = useParams()
    let context = useContext(CartContext)

    useEffect(() => {
        getFirestore().collection('items').doc(id).get()
            .then(querySnapshot => {
                if (querySnapshot.exists) {
                    let itemData = {
                        id: id,
                        ...querySnapshot.data()
                    }

                    itemData.shippingCost = itemData.price * 0.02

                    setItem(itemData)
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
            <ItemDetail
                item={item}
                onRemoveFromCart={context.removeItem}
                onAddToCart={context.addItem}
                onClearCart={context.clear}
                isInCart={context.isInCart}
            />
        </section>
    )
}

export default ItemDetailContainer