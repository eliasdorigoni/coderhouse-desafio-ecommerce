import {useState} from 'react'

const ItemQuantitySelector = ({item, stock, initial, onAdd}) => {
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
        <div className="flex">
            <div className="flex-initial mr-4">
                <p>Cantidad</p>
                <div className="relative inline-block text-white px-12 py-1">
                    {amount}
                    <button type="button" onClick={incrementAmount}
                        className="absolute top-0 right-0 px-3 text-xl border-1 border-gray-600 inline-block
                            hover:bg-white hover:bg-opacity-10 active:bg-opacity-30 transition-all">
                        &#x0002B;
                    </button>
                    <button type="button" onClick={decrementAmount}
                        className="absolute top-0 left-0 px-3 text-xl border-1 border-gray-600 inline-block
                            hover:bg-white hover:bg-opacity-10 active:bg-opacity-30 transition-all">
                        &minus;
                    </button>
                </div>
            </div>

            <div className="flex-initial pt-6">
                <button className="button bg-green-600 active:bg-green-500"
                    onClick={addToCart}
                    type="button">
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemQuantitySelector