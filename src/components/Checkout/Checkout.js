import { useState } from 'react'
import CartContainer from '../Cart/CartContainer'

const Checkout = ({onSubmit, user, orderId, isLoading, formErrors}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [repeatEmail, setRepeatEmail] = useState('')

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
                break
            case 'repeatEmail':
                setRepeatEmail(e.target.value)
                break;
            default:
                break;
        }
    }

    return (
        <div className="max-w-prose mx-auto">
            <div className="mb-4">
                <h1 className="text-2xl font-bold">Finalizar compra</h1>
                <CartContainer template="minicart" />
            </div>

            <h1 className="text-2xl mb-2">Datos personales</h1>
            <div>
                <form onSubmit={e => onSubmit(e, {
                    firstName: firstName,
                    lastName: lastName,
                    phone: phone,
                    email: email,
                    repeatEmail: repeatEmail,
                })}>
                    <div className="mb-6">
                        <div className="grid grid-cols-2 gap-4 mb-2">
                            <div>
                                <label className="block text-gray-300">Nombre</label>
                                <input type="text" name="firstName" onChange={handleInput}
                                    className="border-gray-500 focus:border-white border-2 bg-transparent p-2 w-full"
                                    />
                                { formErrors.firstName.length > 0 &&
                                    formErrors.firstName.map(message =>
                                        <p key={message} className="text-sm bg-red-500 px-1 py-0">{message}</p>
                                    )
                                }
                            </div>
                            <div>
                                <label className="block text-gray-300">Apellido</label>
                                <input type="text" name="lastName" onChange={handleInput}
                                    className="border-gray-500 focus:border-white border-2 bg-transparent p-2 w-full"
                                    />
                                { formErrors.lastName.length > 0 &&
                                    formErrors.lastName.map(message =>
                                        <p key={message} className="text-sm bg-red-500 px-1 py-0">{message}</p>
                                    )
                                }
                            </div>
                        </div>

                        <div className="mb-2">
                            <label className="block text-gray-300">Teléfono</label>
                            <input type="text" name="phone" onChange={handleInput}
                                className="border-gray-500 focus:border-white border-2 bg-transparent p-2 w-full"
                                />
                            { formErrors.phone.length > 0 &&
                                formErrors.phone.map(message =>
                                    <p key={message} className="text-sm bg-red-500 px-1 py-0">{message}</p>
                                )
                            }
                        </div>

                        {user &&
                        <p className="bg-white bg-opacity-10 text-center p-2 mt-2">
                            Accediste como <strong>{user.email}</strong>
                        </p>
                        }

                        {!user &&
                        <div>
                            <div className="grid grid-cols-2 gap-4 mb-2">
                                <div>
                                    <label className="block text-gray-300">Email</label>
                                    <input type="email" name="email" onChange={handleInput}
                                        className="border-gray-500 focus:border-white border-2 bg-transparent p-2 w-full"
                                        />
                                    { formErrors.email.length > 0 &&
                                        formErrors.email.map(message =>
                                            <p key={message} className="text-sm bg-red-500 px-1 py-0">{message}</p>
                                        )
                                    }
                                </div>
                                <div>
                                    <label className="block text-gray-300">Repetir Email</label>
                                    <input type="email" name="repeatEmail" onChange={handleInput}
                                        className="border-gray-500 focus:border-white border-2 bg-transparent p-2 w-full"
                                        />
                                    { formErrors.repeatEmail.length > 0 &&
                                        formErrors.repeatEmail.map(message =>
                                            <p key={message} className="text-sm bg-red-500 px-1 py-0">{message}</p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        }

                        {orderId &&
                        <div className="mt-4 text-center">
                            <p className="text-xl mb-2">¡Gracias por tu compra!</p>
                            <p className="mb-4">
                                Recibimos el pedido con el identificador:
                                <code className="block bg-white bg-opacity-20 px-2">
                                    { orderId }
                                </code>
                            </p>
                            <p>En los próximos días te estaremos contactando.</p>
                        </div>}
                    </div>

                    {!isLoading && !orderId &&
                    <button className="bg-green-600 hover:bg-green-500 active:bg-green-700 rounded px-3 py-1"
                        type="submit">
                            Finalizar compra
                    </button>}

                    {isLoading &&
                    <button className="bg-yellow-400 active:bg-green-500 rounded px-3 py-1"
                        type="button" disabled>
                        <span className="loader"></span>
                    </button>}
                </form>
            </div>
        </div>
    )
}

export default Checkout