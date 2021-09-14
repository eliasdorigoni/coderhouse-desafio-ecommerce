import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from "./../Cart/CartContext"
import AuthContext from "./../Auth/AuthContext"
import Checkout from "./Checkout"
import { getFirestore, getTimestamp } from './../../firebase'

const CheckoutContainer = () => {
    const cartContext = useContext(CartContext)
    const authContext = useContext(AuthContext)

    const [orderId, setOrderId] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [formErrors, setFormErrors] = useState({
        firstName: [],
        lastName: [],
        phone: [],
        email: [],
        repeatEmail: [],
    })

    if (cartContext.items.length === 0 && !orderId) {
        return (
            <div>
                <p>No hay productos en el carrito.</p>
                <Link to="/">Volver a home</Link>
            </div>
        )
    }

    function validate(data) {
        let errors = {
            firstName: [],
            lastName: [],
            phone: [],
            email: [],
            repeatEmail: [],
        }

        if (data.firstName.length === 0) {
            errors.firstName.push('Este campo es requerido.')
        }

        if (data.lastName.length === 0) {
            errors.lastName.push('Este campo es requerido.')
        }

        if (data.phone.length === 0) {
            errors.phone.push('Este campo es requerido.')
        }

        if (!authContext.user) {
            if (data.email.length === 0) {
                errors.email.push('Este campo es requerido.')
            }

            if (data.repeatEmail.length === 0) {
                errors.repeatEmail.push('Este campo es requerido.')
            }

            if (
                data.email.length > 0
                && data.repeatEmail.length > 0
                && data.email !== data.repeatEmail
            ) {
                errors.repeatEmail.push('Los emails no coinciden.')
            }
        }

        return errors
    }

    function validateAndSubmit(e, data) {
        e.preventDefault()
        setIsLoading(true)
        const errors = validate(data)

        let hasErrors = false
        for (let index in errors) {
            if (errors[index].length > 0) {
                hasErrors = true
                break
            }
        }
        setFormErrors(errors)

        if(!hasErrors) {
            const order = {
                buyer: {
                    name: data.firstName + data.lastName,
                    phone: data.phone,
                    email: authContext.user ? authContext.user.email : data.email,
                },
                date: getTimestamp(),
                items: cartContext.items,
                status: 'generada',
                total: cartContext.items.map((item) => item.price).reduce((prev, curr) => prev + curr)
            }

            getFirestore()
                .collection('orders')
                .add(order)
                .then(({ id }) => {
                    setOrderId(id)
                    cartContext.clear()
                    e.target.reset()
                }
            ).finally(() => {
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
    }

    return (
        <Checkout
            onSubmit={validateAndSubmit}
            user={authContext.user}
            orderId={orderId}
            isLoading={isLoading}
            formErrors={formErrors}
            />
    )
}

export default CheckoutContainer