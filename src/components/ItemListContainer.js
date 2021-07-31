import {useState} from 'react'
import ItemList from './ItemList'
import { Products } from './../data/Products'

const ItemListContainer = () => {

    const [products, setProducts] = useState()

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Products)
        }, 2000)
    })

    getItems.then(fetchedProducts => {
        setProducts(fetchedProducts)
    })

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <ItemList items={products} />
        </div>
    )
}

export default ItemListContainer
