import { Link } from 'react-router-dom'

const Item = ({product}) => {
    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' });
    return (
        <div key={product.id} className="bg-white text-black product-card">
            <Link to={'/item/' + product.id}>
                <div className="relative">
                    <img src={product.pictureUrl} alt="" />
                    <div className="absolute top-0 left-0 right-0 text-white
                        product-thumbnail-header">
                        <div className="px-2 pb-8">
                            <h2 className="text-xl font-bold">{product.title}</h2>
                            <p className="text-sm opacity-75" title={product.price + " créditos"}>{priceFormatter.format(product.price)} CR</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item