import { useState } from 'react'
import ItemDetail from './ItemDetail'
import { Products } from './../data/Products'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Products[0])
        }, 2000);
    });

    getItems.then(product => {
        setProduct(product)
    })

    return (
        <ItemDetail item={product} />
    )
}

export default ItemDetailContainer