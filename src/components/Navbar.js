const Navbar = () => {

    const navClasses = [
        'font-title',
        'cursor-pointer',
        'hover:underline',
        'border-1',
        'py-2',
        'border-opacity-30',
        'md:inline-block',
        'md:border-l-2',
        'md:border-white',
        'md:border-opacity-30',
        'md:px-2',
        'md:-mr-1px',
    ].join(' ')

    return (
        <nav className="text-white text-lg text-center">
            <p className={navClasses + ' border-t-2'}>Mechs</p>
            <p className={navClasses}>Robots</p>
            <p className={navClasses}>Ofertas del mes</p>
            <p className={navClasses}>Empresa</p>
            <p className={navClasses}>Contacto</p>
        </nav>
    )
}

export default Navbar