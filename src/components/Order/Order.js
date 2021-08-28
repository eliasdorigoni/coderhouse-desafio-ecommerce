import { useState } from 'react'

const Order = ({onSubmit, recentOrderId, isLoading}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleInput = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                break;
            case 'phone':
                setPhone(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">Finalizar compra</h1>
            <form onSubmit={(e) => onSubmit(e, {name: name, phone: phone, email: email})}>
                <div className="mb-6">
                    <div className="mb-2">
                        <label className="block text-gray-300">Nombre</label>
                        <input type="text" name="name" onChange={handleInput}
                            className="border-gray-500 focus:border-white border-2 bg-transparent p-2 w-full" />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-300">Telefono</label>
                        <input type="text" name="phone" onChange={handleInput}
                            className="border-gray-500 focus:border-white border-2 bg-transparent p-2 w-full" />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-300">Email</label>
                        <input type="email" name="email" onChange={handleInput}
                            className="border-gray-500 focus:border-white border-2 bg-transparent p-2 w-full" />
                    </div>

                    { recentOrderId &&
                    <p className="mt-2 text-center">
                        Recibimos tu pedido con el código:
                        <code className="block bg-white bg-opacity-20 px-2">
                            { recentOrderId }
                        </code>
                    </p> }
                </div>


                {!isLoading &&
                <button className="bg-green-600 hover:bg-green-500 active:bg-green-700 rounded px-3 py-1"
                    type="submit">Finalizar compra</button>
                }

                {isLoading &&
                <button className="bg-yellow-400 active:bg-green-500 rounded px-3 py-1"
                    type="button" disabled>
                    <span className="loader"></span>
                </button>
                }
            </form>
        </div>
    )
}

export default Order