import { Link } from 'react-router-dom'
import OrdersContainer from "../Orders/OrdersContainer"

const UserAccount = ({user, onSignOut}) =>
    <div>
        <h1 className="text-2xl font-bold mb-4">Mi cuenta</h1>

        <div className="bg-white text-gray-800 rounded p-2 w-96 mb-1">
            <img className="w-12 h-12 rounded-full float-left mr-4" src={user.photoURL} alt="foto de perfil" />
            <p className="leading-tight">
                <strong>{user.name}</strong><br />
                {user.email}
            </p>
            <span className="clear-both block"></span>
        </div>

        <Link className="hover:underline" to={`/wishlist/${user.uid}`}>Mi wishlist</Link> - <button onClick={onSignOut} className="hover:underline py-0.5 inline-block mb-6">
            Cerrar sesión
        </button>

        <OrdersContainer />
    </div>

export default UserAccount