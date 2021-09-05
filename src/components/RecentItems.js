const RecentItems = () => {
    const items = [
        'Firestarter COM-1B de 35 toneladas',
        'Javelin JVN-10F',
        'Baterías de celdas nuevas y usadas',
        'Repuestos para drones Blackjack BJ-1 y BJ-3',
        'Nuevo Panther PNT-8Z de 35 toneladas',
        'Mech anfibio Vindicator VND-1X',
        'Misiles Phoenix Hawk',
    ]

    return (
        <div className="border-b-2 bg-black border-main-light py-1">
            <div className="container mx-auto relative">
                <p className="bg-black text-gray-200 inline-block px-2 absolute left-0 top-0 z-20">
                    NUEVOS INGRESOS
                </p>
                <div className="marquee">
                    <p className="text-gray-300">
                        {items.map(product =>
                            <span key={product}>
                                <span>
                                    {product}
                                </span>
                                <span className="text-gray-400 tracking-tighter">&nbsp; /// &nbsp;</span>
                            </span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RecentItems
