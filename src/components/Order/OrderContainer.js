import { useState } from 'react'
import { getTimestamp, getFirestore } from './../../firebase'
import Order from './Order'

const OrderContainer = ({cart}) => {
    const [recentOrderId, setRecentOrderId] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = (e, buyer) => {
        e.preventDefault()
        setIsLoading(true)

        const newOrder = {
            buyer: buyer,
            items: cart,
            date: getTimestamp(),
            status: 'generada',
            total: cart.map((item) => item.price).reduce((prev, curr) => prev + curr)
        }

        getFirestore().collection('orders').add(newOrder).then(({ id }) => {
            setRecentOrderId(id)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <Order onSubmit={onSubmit} recentOrderId={recentOrderId} isLoading={isLoading} />
    )
}

export default OrderContainer