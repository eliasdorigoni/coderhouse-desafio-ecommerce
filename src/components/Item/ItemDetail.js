import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemQuantitySelector from './ItemQuantitySelector'
import ItemDetailNotFound from './ItemDetailNotFound'
import ItemGallery from './ItemGallery'
import Title from '../Misc/Title'
import Subtitle from '../Misc/Subtitle'
import AddToWishlistContainer from '../Wishlist/AddToWishlistContainer'

const ItemDetail = ({ item, onRemoveFromCart, onAddToCart, isInCart }) => {
    const [variantGallery, setVariantGallery] = useState()

    if (typeof item === 'undefined') {
        return (
            <span className="loader"></span>
        )
    }

    if (item && Object.keys(item).length === 0 && item.constructor === Object) {
        return <ItemDetailNotFound />
    }

    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' })

    const checkoutButton = (
        <div>
            <p className="text-gray-400 text-sm">¡Este producto está en el carrito!</p>

            <div className="flex flex-wrap gap-2 my-2">
                <div className="flex-initial ">
                    <Link to="/cart" className="button bg-green-600 active:bg-green-500 inline-block">
                        <img className="w-5 inline-block align-middle mr-2"
                            src="/svg/shopping-cart.svg"
                            alt="Carrito" />
                        Ir al carrito
                    </Link>
                </div>

                <div className="flex-initial ">
                    <button type="button"
                        onClick={() => onRemoveFromCart(item.id)}
                        className="button bg-red-500 active:bg-red-400 inline-block">
                        &times;
                        Remover del carrito
                    </button>
                </div>

            </div>


        </div>
    )

    const onVariantSwitch = (item) => {
        typeof item == 'undefined'
            ? setVariantGallery()
            : setVariantGallery(item.gallery)
    }

    return (
        <section>
            <div className="lg:hidden">
                <Title>{item.title}</Title>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <ItemGallery pictures={variantGallery || item.gallery} />
                </div>

                <div>
                    <div className="hidden lg:block">
                        <Title>{item.title}</Title>
                    </div>

                    <div className="mb-6">

                        <p className="text-sm text-gray-400 mb-2">
                            Disponible: {item.stock} unidades
                        </p>
                        <p className="text-4xl mb-6 leading-4 tracking-tight"
                            title={item.price + " créditos"}>
                            &#8371; {priceFormatter.format(item.price)}
                        </p>

                        <div className="mb-6">
                            <img className="w-10 inline-block mr-2 opacity-30"
                                alt="Visa" title="Visa"
                                src="/svg/cc-visa.svg" />
                            <img className="w-10 inline-block mr-2 opacity-30"
                                alt="Mastercard" title="Mastercard"
                                src="/svg/cc-mastercard.svg" />
                            <img className="w-10 inline-block mr-2 opacity-30"
                                alt="Discover" title="Discover"
                                src="/svg/cc-discover.svg" />
                            <img className="w-10 inline-block mr-2 opacity-30"
                                alt="Amex" title="Amex"
                                src="/svg/cc-amex.svg" />
                            <img className="w-10 inline-block mr-2 opacity-30"
                                alt="Paypal" title="Paypal"
                                src="/svg/cc-paypal.svg" />
                            <img className="w-10 inline-block mr-2 opacity-30"
                                alt="Amazon pay" title="Amazon pay"
                                src="/svg/cc-amazon-pay.svg" />
                            <img className="w-10 inline-block mr-2 opacity-30"
                                alt="Apple pay" title="Apple pay"
                                src="/svg/cc-apple-pay.svg" />
                        </div>

                        { isInCart(item.id)
                            ? checkoutButton
                            : <ItemQuantitySelector
                                item={item}
                                stock={item.stock}
                                initial={item.stock > 0 ? 1 : 0}
                                onAdd={onAddToCart}
                                onVariantSwitch={onVariantSwitch}
                                />
                        }
                    </div>

                    <AddToWishlistContainer itemid={item.id} />

                    <Subtitle>Envío</Subtitle>
                    <div className="mb-8">
                        <p>
                            Llega en <span className="text-green-400">10 días</span> por <span className="text-yellow-400">&#8371; {priceFormatter.format(item.shippingCost)}</span>.
                        </p>
                    </div>

                    <Subtitle>Devolución y garantía</Subtitle>
                    <div className="mb-8">
                        <p>Podés devolver el producto hasta 30 días después de que lo recibís.</p>
                        <p>Tenés 30 días desde que lo recibís.</p>
                    </div>

                </div>
            </div>
            <div className="bg-white bg-opacity-10 pt-2 pb-8">
                <div className="max-w-prose mx-auto">
                    <Subtitle>Descripción</Subtitle>
                    <div className="mb-8">
                        <p className="">{item.description}</p>
                    </div>

                    { item.credits && <>
                        <p><strong>Source:</strong> <a className="text-blue-300 hover:underline break-all" href={item.credits} target="_blank" rel="noreferrer">
                            {item.credits}</a></p>
                    </>}

                </div>
            </div>

        </section>
    )
}

export default ItemDetail