import { useState } from 'react'
import { Provider } from './CartContext'

const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            // Este caso nunca se puede dar porque el botón de agregar al carrito
            // queda oculto después de agregar un producto.
            // Pero el desafío es el desafío...
            console.log('Error: el producto ya fue agregado.')
            return
        }

        item.quantity = quantity

        setItems([...items, item])
    }

    /**
     * Busca y elimina el item de la lista
     * @param {string} itemId ID del producto
     */
    const removeItem = (itemId) => {
        setItems(items.filter(item => item.id !== itemId))
    }

    /**
     * Elimina todos los items del carrito.
     */
    const clear = () => {
        setItems([])
    }

    /**
     * Indica si el item está en el carrito
     * @param {string} id ID del item
     * @returns bool
     */
    const isInCart = (id) => {
        return items.filter(item => item.id === id).length === 1
    }

    /**
     * Devuelve la suma de todas las cantidades solicitadas de cada producto.
     * Ej: 1 producto "A" + 2 productos "B" = 3 productos
     * @returns int
     */
    const getTotalQuantity = () => {
        let quantity = 0

        for (const item of items) {
            quantity += item.quantity
        }

        return quantity
    }

    const getTotalPrice = () => {
        let price = 0
        for (const item of items) {
            price += item.price
        }
        return price
    }

    const providerValues = {
        items: items,
        addItem: addItem,
        removeItem: removeItem,
        clear: clear,
        isInCart: isInCart,
        getTotalQuantity: getTotalQuantity,
        getTotalPrice: getTotalPrice,
    }

    return (
        <Provider value={providerValues}>
            {children}
        </Provider>
    )
}

export default CartProvider