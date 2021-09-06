import { useState } from 'react'

const Checkout = ({onSubmit, orderId, isLoading}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const allFields = () => {
        return {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
        }
    }

    const handleInput = (e) => {
        switch (e.target.name) {
            case 'firstName':
                setFirstName(e.target.value)
                break;
            case 'lastName':
                setLastName(e.target.value)
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
        <>
            <h1 className="text-2xl font-bold">Finalizar compra</h1>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <form onSubmit={(e) => onSubmit(e, allFields())}>
                        <div className="mb-6">
                            <div className="grid grid-cols-2 gap-4 mb-2">
                                <div>
                                    <label className="block text-gray-300">Nombre</label>
                                    <input type="text" name="firstName" onChange={handleInput}
                                        className="border-gray-500 focus:border-white border-2 bg-transparent p-2 w-full" />
                                </div>
                                <div>
                                    <label className="block text-gray-300">Apellido</label>
                                    <input type="text" name="lastName" onChange={handleInput}
                                        className="border-gray-500 focus:border-white border-2 bg-transparent p-2 w-full" />
                                </div>
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-300">Telefono</label>
                                <input type="text" name="phone" onChange={handleInput}
                                    className="border-gray-500 focus:border-white border-2 bg-transparent p-2 w-full" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-2">
                                <div>
                                    <label className="block text-gray-300">Email</label>
                                    <input type="email" name="email" onChange={handleInput}
                                        className="border-gray-500 focus:border-white border-2 bg-transparent p-2 w-full" />
                                </div>
                                <div>
                                    <label className="block text-gray-300">Repetir Email</label>
                                    <input type="email" name="email" onChange={handleInput}
                                        className="border-gray-500 focus:border-white border-2 bg-transparent p-2 w-full" />
                                </div>
                            </div>

                            { orderId &&
                            <p className="mt-2 text-center">
                                Recibimos tu pedido con el código:
                                <code className="block bg-white bg-opacity-20 px-2">
                                    { orderId }
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

                <div>

                </div>
            </div>
        </>
    )
}

export default Checkout