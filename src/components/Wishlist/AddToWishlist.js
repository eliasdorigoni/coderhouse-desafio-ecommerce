import { Link } from 'react-router-dom'

const AddToWishlist = ({wishlistUrl, isInWishlist, onAdd, onRemove}) => {
    let button
    if (isInWishlist) {
        button = <button className="bg-red-500 text-white px-2 py-1 mr-3"
            type="button" onClick={onRemove}>
            <img className="w-4 h-4 inline-block mr-2 align-middle relative bottom-0.5"
                src="/svg/heart.svg" alt="icono" />
            Remover de wishlist
        </button>
    } else {
        button = <button className="border-white border-1 text-white px-2 py-1 hover:bg-white hover:bg-opacity-10 mr-3"
            type="button" onClick={onAdd}>
            <img className="w-4 h-4 inline-block mr-2 align-middle relative bottom-0.5"
                src="/svg/heart.svg" alt="icono" />
            Agregar a wishlist
        </button>
    }

    return (
        <div className="mb-4">
            {button}
            <Link className="text-sm hover:underline inline-block" to={wishlistUrl}>
                Mi wishlist
            </Link>
        </div>
    )
}

export default AddToWishlist