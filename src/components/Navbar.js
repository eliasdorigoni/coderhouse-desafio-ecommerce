const Navbar = () => {
    const navClasses = [
        'border-1 border-main-light',
        'cursor-pointer',
        'merge-border-1',
        'px-4 py-1',
        'lg:pt-11',
        'hover:bg-white hover:bg-opacity-30',
    ].join(' ')

    return (
        <>
            <div className="flex-shrink-0 lg:hidden pt-8">
                <button
                    className="border-2 border-white block rounded-md"
                    type="button">
                    <img src="/svg/menu.svg" alt="Menu" className="w-10 h-10 hover:bg-white hover:bg-opacity-25" />
                </button>
            </div>

            <nav className="
                lg:flex
                items-stretch
                content-center
                font-body
                font-bold
                text-lg
                text-center
                text-white
                w-full
                lg:w-auto
                ">
                <p className={navClasses}>Mechs</p>
                <p className={navClasses}>Robots</p>
                <p className={navClasses}>Ofertas del mes</p>
                <p className={navClasses}>Empresa</p>
                <p className={navClasses}>Contacto</p>
            </nav>
        </>
    )
}

export default Navbar