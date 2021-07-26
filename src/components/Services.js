const Services = () => {

    const data = [
        {
            icon: '/coderhouse-desafio-ecommerce/svg/box.svg',
            description: 'Envíos gratis hasta 25 millones de km',
        },
        {
            icon: '/coderhouse-desafio-ecommerce/svg/customer-support.svg',
            description: 'Servicio post-venta',
        },
        {
            icon: '/coderhouse-desafio-ecommerce/svg/target.svg',
            description: 'Descuentos al sindicato de mercenarios',
        },
        {
            icon: '/coderhouse-desafio-ecommerce/svg/flyers.svg',
            description: 'Gift cards',
        },
        {
            icon: '/coderhouse-desafio-ecommerce/svg/swap.svg',
            description: 'Plan canje',
        },
        {
            icon: '/coderhouse-desafio-ecommerce/svg/badge.svg',
            description: 'Ganador por 214 años consecutivos a la excelencia comercial',
        },
    ]

    return (
        <div>
            {data.map(service =>
                <div key={service.description} className="bg-black bg-opacity-30 text-white flex
                    items-center mb-3 rounded px-4 py-2">
                    <img className="w-12 h-12 inline-block" src={service.icon} alt="" />
                    <p className="pl-4 leading-5">{service.description}</p>
                </div>
            )}
        </div>
    )
}

export default Services