const Services = () => {

    const data = [
        {
            icon: '/svg/box.svg',
            description: 'Envíos gratis hasta 25 millones de km',
        },
        {
            icon: '/svg/customer-support.svg',
            description: 'Servicio post-venta',
        },
        {
            icon: '/svg/target.svg',
            description: 'Descuentos al sindicato de mercenarios',
        },
        {
            icon: '/svg/flyers.svg',
            description: 'Gift cards',
        },
        {
            icon: '/svg/swap.svg',
            description: 'Plan canje',
        },
        {
            icon: '/svg/badge.svg',
            description: 'Ganador por 214 años consecutivos a la excelencia comercial',
        },
    ]

    return (
        <div>
            {data.map(service =>
                <div className="bg-black bg-opacity-30 text-white flex items-center mb-3 rounded px-4 py-2">
                    <img class="w-12 h-12" src={service.icon} alt="" />
                    <p class="pl-4 leading-5">{service.description}</p>
                </div>
            )}
        </div>
    )
}

export default Services