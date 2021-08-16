import {useState} from 'react'

const ItemCount = ({id, stock, initial, onAdd}) => {
    const [amount, setAmount] = useState(parseInt(initial))

    const incrementAmount = () => {
        if (amount < parseInt(stock)) {
            setAmount(amount + 1)
        }
    }

    const decrementAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1)
        }
    }

    const addToCart = () => {
        if (stock > 0) {
            onAdd(id, amount)
        }
    }

    return (
        <div className="border-1 border-white rounded text-center mb-6 pb-2 max-w-md mx-auto">
            <p className="mb-2">Cantidad</p>
            <div className="relative">
                <p className="bg-white bg-opacity-70 text-black py-1">{amount}</p>
                <button
                    className="
                        absolute top-1 right-1
                        rounded px-3 font-bold
                        text-black bg-gray-200 hover:bg-white"
                    type="button" onClick={incrementAmount}>+</button>
                <button
                    className="
                        absolute top-1 left-1
                        rounded px-3 font-bold
                        text-black bg-gray-200 hover:bg-white"
                    type="button" onClick={decrementAmount}>-</button>
            </div>

            <p className="text-xs opacity-50 mb-2">Stock: {stock}</p>

            <button className="bg-green-600 active:bg-green-500 rounded px-3 py-1"
                onClick={addToCart}
                type="button">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount