const ItemPlaceholder = () =>
    <>
        <div className="relative w-full h-0" style={{paddingBottom:100+"%"}}>
            <div className="absolute left-0 right-0 top-0 bottom-0">
                <svg className="animate-pulse" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 104 104">
                    <polyline points="51 47 64 47 38 78 48 55 36 55 50 26 64 26"
                        fill="#ffffff" opacity="0.6" />
                    <polygon points="0 30 0 100 70 100 100 70 100 0 30 0"
                        fill="transparent" opacity="0.4" stroke="#ffffff" strokeWidth="2" />
                </svg>
            </div>
        </div>
    </>

export default ItemPlaceholder