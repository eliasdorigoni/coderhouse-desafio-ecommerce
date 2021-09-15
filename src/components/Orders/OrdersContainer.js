import { useEffect, useState, useContext } from 'react'
import { getFirestore } from '../../firebase'
import Orders from './Orders'
import PageNotFound from '../PageNotFound'
import AuthContext from '../Auth/AuthContext'

const OrderContainer = () => {
    const [orders, setOrders] = useState()
    const context = useContext(AuthContext)

    useEffect(() => {
        if (context.hasUser()) {
            getFirestore()
                .collection('orders')
                .where('userid', '==', context.user.uid)
                .orderBy('date', 'desc')
                .get()
                .then(querySnapshot => {
                    setOrders(querySnapshot.docs.map(doc => {
                        return {id: doc.id, ...doc.data()}
                    }))
                })
                .catch(() => {})
        }
    }, [context])

    if (context.hasUser()) {
        return (
            <Orders orders={orders} />
        )
    } else {
        return (
            <PageNotFound />
        )
    }
}

export default OrderContainer