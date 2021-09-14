import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getFirestore } from './../firebase'

const Navbar = () => {
    const [navIsVisible, setNavIsVisible] = useState(false)
    const [categories, setCategories] = useState()

    const navItemClasses = [
        'border-1',
        'border-main-light',
        'cursor-pointer',
        'merge-border-1',
        'px-4 py-1',
        'lg:pt-11',
        'block lg:inline',
        'hover:bg-white hover:bg-opacity-30',
    ].join(' ')

    const toggleNavVisibility = () => {
        setNavIsVisible(!navIsVisible)
    }

    useEffect(() => {
        getFirestore()
            .collection('categories')
            .get()
            .then(querySnapshot => {
                setCategories(querySnapshot.docs.map(doc => doc.data()))
            })
            .catch(() => {
                // No se pudieron traer las categorías y no hay mucho para hacer.
            })
    }, [])

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
                {categories && categories.length > 0 &&
                    categories.map(({id, title}) =>
                        <NavLink activeClassName="bg-white bg-opacity-25"
                            key={id}
                            className={navItemClasses} to={'/category/' + id}>{title}</NavLink>
                    )
                }
                <NavLink activeClassName="bg-white bg-opacity-25"
                    className={navItemClasses} to={'/about-us'} >Empresa</NavLink>
                <NavLink activeClassName="bg-white bg-opacity-25"
                    className={navItemClasses} to={'/contact-us'} >Contacto</NavLink>
            </nav>
        </>
    )
}

export default Navbar