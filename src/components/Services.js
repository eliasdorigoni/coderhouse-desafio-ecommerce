const Services = () => {
    const contents = [
        {
            icon: '/svg/box.svg',
            description: 'Envíos gratis hasta 25 millones de km',
            alt: 'Icono de envíos',
        },
        {
            icon: '/svg/customer-support.svg',
            description: 'Servicio post-venta',
            alt: 'Icono de servicio post-venta',
        },
        {
            icon: '/svg/target.svg',
            description: 'Descuentos al sindicato de mercenarios',
            alt: 'Icono de descuentos',
        },
        {
            icon: '/svg/flyers.svg',
            description: 'Gift cards',
            alt: 'Icono de gift cards',
        },
        {
            icon: '/svg/swap.svg',
            description: 'Plan canje',
            alt: 'Icono de plan canje',
        },
        {
            icon: '/svg/badge.svg',
            description: 'Ganador por 214 años consecutivos a la excelencia comercial',
            alt: 'Icono de ganador',
        },
    ]

    return (
        <div>
            {contents.map(service =>
                <div key={service.description} className="bg-black bg-opacity-30 text-white flex
                    items-center mb-3 rounded px-4 py-2">
                    <img className="w-12 h-12 inline-block" src={service.icon} alt={service.alt} />
                    <p className="pl-4 leading-5">{service.description}</p>
                </div>
            )}
        </div>
    )
}

export default Services