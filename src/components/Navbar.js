import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './../components/Cart/CartWidget'
import CartContext from './../components/Cart/CartContext'

const Navbar = () => {
    const [navIsVisible, setNavIsVisible] = useState(true)
    let context = useContext(CartContext)

    const navItemClasses = [
        'border-1 border-main-light',
        'cursor-pointer',
        'merge-border-1',
        'px-4 py-1',
        'lg:pt-11',
        'hover:bg-white hover:bg-opacity-30',
    ].join(' ')

    const toggleNavVisibility = () => {
        setNavIsVisible(!navIsVisible)
    }

    const totalQuantity = context.getTotalQuantity()

    return (
        <>
            <div className="flex-shrink-0 lg:hidden pt-8">
                <button
                    onClick={() => toggleNavVisibility()}
                    className="border-2 border-white block rounded-md"
                    type="button">
                    <img className="w-10 h-10 hover:bg-white hover:bg-opacity-25"
                        src="/svg/menu.svg" alt="Menu" />
                </button>
            </div>

            <nav className={'navbar ' + (!navIsVisible ? 'hidden lg:visible' : '')}>
                <NavLink activeClassName="bg-white bg-opacity-25" className={navItemClasses} to={'/category/utility'} >Utilitarios</NavLink>
                <NavLink activeClassName="bg-white bg-opacity-25" className={navItemClasses} to={'/category/combat'} >Combate</NavLink>
                <NavLink activeClassName="bg-white bg-opacity-25" className={navItemClasses} to={'/about-us'} >Empresa</NavLink>
                <NavLink activeClassName="bg-white bg-opacity-25" className={navItemClasses} to={'/contact-us'} >Contacto</NavLink>
                {totalQuantity > 0 && <NavLink to={'/cart'} className={navItemClasses + " bg-red-500 lg:pt-11 px-2"}>
                    <CartWidget itemCount={totalQuantity} />
                </NavLink>}
            </nav>
        </>
    )
}

export default Navbar