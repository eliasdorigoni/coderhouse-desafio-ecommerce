import ItemList from './../Item/ItemList'

const Wishlist = ({content, items, isLoading}) =>
    <>
        <h1 className="bold text-2xl mb-4">
            {isLoading && !content && <>Cargando...</>}
            {content && <>Wishlist de {content.owner}</>}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ItemList items={items} />
        </div>
    </>

export default Wishlist