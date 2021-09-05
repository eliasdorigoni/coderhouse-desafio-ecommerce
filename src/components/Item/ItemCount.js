import {useState} from 'react'

const ItemCount = ({item, stock, initial, onAdd}) => {
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
            onAdd(item, amount)
        }
    }

    return (
        <div className="mb-6 pb-2 text-center max-w-md mx-auto">
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

            <button className="button bg-green-600 active:bg-green-500"
                onClick={addToCart}
                type="button">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount